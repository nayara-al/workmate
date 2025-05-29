/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginResponse, LoginRequest, RegisterRequest } from '@/interface/IUser';
import api from './api';
import Cookies from 'js-cookie';

const TOKEN_COOKIE_KEY = 'token';
const USER_COOKIE_KEY = 'user';

export async function login({ userName, password }: LoginRequest): Promise<boolean> {
  try {
    const response = await api.post<ILoginResponse>('/api/Auth/login', { userName, password });
    const data = response.data;

    Cookies.set(TOKEN_COOKIE_KEY, data.token, { expires: 7 });
    Cookies.set(USER_COOKIE_KEY, JSON.stringify({
      usuarioId: data.id, 
    }), { expires: 7 });

    return true;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}

export function logout() {
  Cookies.remove(USER_COOKIE_KEY);
  Cookies.remove(TOKEN_COOKIE_KEY);
}

export function getToken(): string | undefined {
  return Cookies.get(TOKEN_COOKIE_KEY);
}

export function getUser() {
  const userData = Cookies.get(USER_COOKIE_KEY);
  return userData ? JSON.parse(userData) : null;
}

export function isAuthenticated() {
  return !!Cookies.get(TOKEN_COOKIE_KEY);
}

export async function registerUser(data: RegisterRequest): Promise<void> {
  try {
    const response = await api.post('/api/Auth/register', data);
    console.log('Usuário registrado com sucesso:', response.data);
  } catch (error: any) {
    console.error('Erro ao registrar usuário:', error);
    const errorMessage = error.message || 'Erro ao registrar usuário';
    throw new Error(errorMessage);
  }
}

