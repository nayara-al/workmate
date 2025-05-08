import api from './api';

export async function fetchFilteredProfessionals(params: {
  nome?: string;
  localizacao?: string;
  subcategoriaId?: number;
  notaMinima?: number;
}) {
  try {
    const query = new URLSearchParams();

    if (params.nome) query.append('nome', params.nome);
    if (params.localizacao) query.append('localizacao', params.localizacao);
    if (params.subcategoriaId !== undefined) query.append('subcategoriaId', params.subcategoriaId.toString());
    if (params.notaMinima !== undefined) query.append('notaMinima', params.notaMinima.toString());

    const response = await api.get(`/api/Usuarios/filtrar?${query.toString()}`);

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar profissionais:', error);
    return [];
  }
}
