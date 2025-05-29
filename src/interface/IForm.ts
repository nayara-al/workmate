export interface IFormData {
  nome: string;
  userName: string;
  email: string;
  password: string;
  estado: string;
  cidade: string;
  tipoUsuario: string;
  fotoPerfil: string;
}


export interface ICadastroTrabalhadorFormData {
  area: string;
  especializacao: string;
  disponibilidade: string;
  experiencia: string;
  // demais campos obrigatórios para o registro, talvez estendidos do RegisterRequest
}

