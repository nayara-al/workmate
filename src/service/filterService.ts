import { ICategoria, ISubcategoria } from '@/interface/ICategoria';
import api from './api';

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