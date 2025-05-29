import { IReviewRequest } from '@/interface/IUser';
import api from './api';

export async function associarSubcategorias(usuarioId: string, subcategoriasIds: string[]): Promise<boolean> {
  try {
    await api.post('/api/Usuarios/associar-especialidades', {
      usuarioId,
      subcategoriasIds,
    });
    return true;
  } catch (error) {
    console.error('Erro ao associar subcategorias:', error);
    return false;
  }
}

function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find(c => c.startsWith(name + '='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

export async function createReview(data: IReviewRequest): Promise<boolean> {
  try {
    const token = getCookieValue('token');
    const userDataStr = getCookieValue('user');
    console.log('token:' + token)
    let clienteId = null;
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        clienteId = userData.usuarioId || null;
      } catch {
        console.warn('Não foi possível fazer parse do cookie user');
      }
    }

    const reviewData = { ...data, clienteId };

    await api.post('/api/Avaliacoes', reviewData, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    return true;
  } catch (error) {
    console.error("Erro ao enviar avaliação:", error);
    return false;
  }
}
