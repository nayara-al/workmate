export interface IService {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  subcategoriaId: string;
  prestadorId: string;
}

export interface IServiceRequest {
  titulo: string;
  descricao: string;
  preco: number;
  subcategoriaId: string;
  prestadorId: string;
}
