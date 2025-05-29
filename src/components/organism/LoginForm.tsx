'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AtomComponents from '../atoms';
import { login } from '@/service/authService';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const success = await login({ userName, password });

    if (success) {
      router.push('/catalogo');
    } else {
      setErro('Usuário ou password inválidos.');
    }
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

      <AtomComponents.Button variant="primary" type="submit">Entrar</AtomComponents.Button>

      <p className="text-gray01 text-sm text-center mt-4">
        Ainda não tem conta?{' '}
        <Link href="/cadastro" className="text-secondary hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}
