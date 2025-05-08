  export interface IProfessional {
    id: number;
    nome: string;
    nota: number;
    cidade: string;
    estado: string;
    email:string;
    telefone:string;
    disponibilidade: string;
    formacao: string;
    experiencia: string;
    certificacoes: string[];
    especializacoes: string[];
    mediaNota: number;
    portifolio?: string | null
  }