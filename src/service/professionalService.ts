import { IProfessional } from '@/interface/IProfessional';
import api from './api';
import { IService, IServiceRequest } from '@/interface/IService';

export async function fetchUsuarioById(id: string): Promise<IProfessional | null> {
  try {
    const response = await api.get(`/api/Usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o profissional:", error);
    return null;
  }
}

export async function getServicesByUserId(userId: string): Promise<IService[]> {
  try {
    const response = await api.get<IService[]>(`/api/Usuarios/${userId}/servicos`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
    return [];
  }
}

export async function verificarEspecialidadesPrestador(usuarioId: number): Promise<boolean> {
  try {
    const res = await api.get(`/api/Usuarios/${usuarioId}/especialidades`);
    const especialidades = res.data;

    return Array.isArray(especialidades) && especialidades.length > 0;
  } catch (error) {
    console.error('Erro ao verificar especialidades do prestador:', error);
    return false;
  }
}

export async function createService(data: IServiceRequest): Promise<boolean> {
  try {
    await api.post('/api/Servicos', data);
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar serviço:", error);
    return false;
  }
}