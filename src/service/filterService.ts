import { ICategoria, ISubcategoria } from '@/interface/ICategoria';
import api from './api';

export async function fetchFilteredProfessionals(params: {
  nome?: string;
  localizacao?: string;
  subcategoriaNome?: string;
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

export async function fetchCategorias(): Promise<ICategoria[]> {
  try {
    const response = await api.get('/api/Categorias');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

export async function fetchSubcategorias(): Promise<ISubcategoria[]> {
  try {
    const response = await api.get('/api/Subcategorias');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar subcategorias:', error);
    return [];
  }
}