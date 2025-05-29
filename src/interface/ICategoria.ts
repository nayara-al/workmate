export interface ICategoria {
  id: number;
  nome: string;
}

export interface ISubcategoria {
  id: number;
  nome: string;
  categoriaNome: string
}