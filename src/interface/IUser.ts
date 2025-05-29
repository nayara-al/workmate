export interface IUser {
  token: string;
  usuarioId: number;
  nome: string;
  tipo: string;
}

export type LoginRequest = {
  userName: string;
  password: string;
};

export interface RegisterRequest {
  userName: string;
  email: string;
  password: string;
  tipoUsuario: 'Cliente' | 'Prestador';
  nome: string;
  fotoPerfil?: string;
  cidade: string;
  estado: string;
  disponibilidade?: string;
  formacao?: string;
  experiencia?: string;
}
