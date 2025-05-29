export interface ILoginResponse {
  id: string;
  token: string;
  refreshToken: string;
  expiration: string;
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

export interface IUser  {
    usuarioId: string;
    nome?: string;
  }

  export interface IReviewRequest {
  nota: number;
  comentario: string;
  servicoId: string;
}
