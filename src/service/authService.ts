/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser, LoginRequest, RegisterRequest } from '@/interface/IUser';
import api from './api';
import Cookies from 'js-cookie';

const TOKEN_COOKIE_KEY = 'auth_token';
const USER_COOKIE_KEY = 'auth_user';

export async function login({ userName, password }: LoginRequest): Promise<boolean> {
  try {
    const response = await api.post<IUser>('/api/Auth/login', { userName, password });
    const data = response.data;
    console.log(response.data)

    Cookies.set(TOKEN_COOKIE_KEY, data.token, { expires: 7 });
    Cookies.set(USER_COOKIE_KEY, JSON.stringify({
      usuarioId: data.usuarioId,
      nome: data.nome,
      tipo: data.tipo,
    }), { expires: 7 });

    return true;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}

export function logout(): void {
  Cookies.remove(TOKEN_COOKIE_KEY);
  Cookies.remove(USER_COOKIE_KEY);
}

export function getToken(): string | undefined {
  return Cookies.get(TOKEN_COOKIE_KEY);
}

export function getUser(): { usuarioId: number; nome: string; tipo: string } | null {
  const userJson = Cookies.get(USER_COOKIE_KEY);
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export async function registerUser(data: RegisterRequest): Promise<void> {
  try {
    console.log('Payload enviado para /register:', data);
    const response = await api.post('/api/Auth/register', data);
    console.log('Usuário registrado com sucesso:', response.data);
  } catch (error: any) {
    console.error('Erro ao registrar usuário:', error);
    const errorMessage = error.message || 'Erro ao registrar usuário';
    throw new Error(errorMessage);
  }
}

