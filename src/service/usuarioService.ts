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