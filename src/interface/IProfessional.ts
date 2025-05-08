/*export interface IProfessional {
    id: string;
    name: string;
    rating: number;
    city: string;
    state: string;
    availability: string;
    formation: string;
    experience: string;
    certifications: string[];
    specialties: string[];
  }
  */

  export interface IProfessional {
    id: number;
    nome: string;
    nota: number;
    cidade: string;
    estado: string;
    disponibilidade: string;
    formacao: string;
    experiencia: string;
    certificacoes: string[];
    especializacoes: string[];
    mediaNota: number;
  }