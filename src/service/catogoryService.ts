import { ISubcategoria } from "@/interface/ICategoria";
import api from "./api"; 

export async function fetchSubcategorias(): Promise<ISubcategoria[]> {
  try {
    const response = await api.get('/api/Subcategorias');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar subcategorias:', error);
    return [];
  }
}
