import { IProfessional } from '@/interface/IProfessional';
import api from './api';
import { IService } from '@/interface/IService';

export async function fetchFilteredProfessionals(params: {
  nome?: string;
  localizacao?: string;
  subcategoriaNome?: number;
  notaMinima?: number;
}) {
  try {
    const query = new URLSearchParams();

    if (params.nome) query.append('nome', params.nome);
    if (params.localizacao) query.append('localizacao', params.localizacao);
    if (params.subcategoriaNome !== undefined) query.append('subcategoriaNome', params.subcategoriaNome.toString());
    if (params.notaMinima !== undefined) query.append('notaMinima', params.notaMinima.toString());

    const response = await api.get(`/api/Usuarios/filtrar?${query.toString()}`);

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    return [];
  }
}

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