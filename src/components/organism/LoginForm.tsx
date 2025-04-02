// src/components/organisms/LoginForm.tsx
import Link from "next/link";
import AtomComponents from "../atoms";

export default function LoginForm() {
  return (
    <form className="w-full max-w-sm">
      <div className="mb-4">
        <AtomComponents.Label htmlFor="email">Email</AtomComponents.Label>
        <AtomComponents.Input
          id="email"
          type="email"
          placeholder="name@exemplo.com"
        />
      </div>

      <div className="mb-4">
        <AtomComponents.Label htmlFor="password">Senha</AtomComponents.Label>
        <AtomComponents.Input
          id="password"
          type="password"
          placeholder="************"
        />
      </div>

      <div className="flex justify-between text-gray01 text-sm mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1" /> Lembrar de mim
        </label>
        <a href="#" className="hover:underline">
          Esqueci a senha
        </a>
      </div>

      <AtomComponents.Button variant="primary">Entrar</AtomComponents.Button>

      <p className="text-gray01 text-sm text-center mt-4">
        Ainda não tem conta?{" "}
        <Link href="/cadastro" className="text-secondary hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}
