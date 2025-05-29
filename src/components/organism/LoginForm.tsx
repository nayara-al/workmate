'use client';

import { useState } from 'react';
import Link from 'next/link';
import AtomComponents from '../atoms';
import { login } from '@/service/authService';
import { fetchUsuarioById, verificarEspecialidadesPrestador } from '@/service/professionalService';
import Cookies from "js-cookie";

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErro('');
    setLoading(true);

    const success = await login({ userName, password });

    if (!success) {
      setErro('Usuário ou password inválidos.');
      setLoading(false);
      return;
    }

    try {
      const userCookie = Cookies.get('user');
      const parsedUser = userCookie ? JSON.parse(userCookie) : null;

      if (!parsedUser?.usuarioId) {
        throw new Error('ID do usuário não encontrado no cookie.');
      }

      const usuario = await fetchUsuarioById(parsedUser.usuarioId);

      if (!usuario) {
        throw new Error('Erro ao buscar dados do usuário.');
      }

      if (usuario && usuario.tipo?.toLowerCase() === 'prestador') {
        const possuiEspecialidades = await verificarEspecialidadesPrestador(usuario.id);

        if (!possuiEspecialidades) {
          window.location.href = '/associar-especialidade';
          return;
        }
      }

      window.location.href = '/meu-perfil';

    } catch (error) {
      console.error('Erro durante redirecionamento após login:', error);
      setErro('Erro ao validar o usuário. Tente novamente.');
    }

    setLoading(false);
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <AtomComponents.Label htmlFor="username">Usuário</AtomComponents.Label>
        <AtomComponents.Input
          id="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
      </div>

      <div className="mb-4">
        <AtomComponents.Label htmlFor="password">password</AtomComponents.Label>
        <AtomComponents.Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
        />
      </div>

      {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

      <div className="flex justify-between text-gray01 text-sm mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1" /> Lembrar de mim
        </label>
        <a href="#" className="hover:underline">Esqueci a password</a>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <AtomComponents.LoadingSpinner />
        </div>
      ) : (
        <AtomComponents.Button variant="primary" type="submit">Entrar</AtomComponents.Button>
      )}

      <p className="text-gray01 text-sm text-center mt-4">
        Ainda não tem conta?{' '}
        <Link href="/cadastro" className="text-secondary hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}
