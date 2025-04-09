'use client';

import { useRouter } from 'next/navigation';
import MoleculeComponent from "../molecules";
import AtomComponent from "../atoms";

export default function CadastroForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/cadastro-trabalhador'); // ou o caminho correto da rota
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <MoleculeComponent.FormField label="Nome" id="name" type="text" placeholder="name@exemplo.com" />
      <MoleculeComponent.FormField label="Email" id="email" type="email" placeholder="name@exemplo.com" />
      <MoleculeComponent.FormField label="Senha" id="password" type="password" placeholder="************" />
      <MoleculeComponent.FormField label="Repetir Senha" id="confirm-password" type="password" placeholder="************" />
      <MoleculeComponent.FormField label="Estado" id="estado" options={["Sergipe", "Bahia", "São Paulo"]} />
      <MoleculeComponent.FormField label="Cidade" id="cidade" options={["Aracaju", "Salvador", "São Paulo"]} />
      <MoleculeComponent.FormField label="Qual o seu interesse?" id="interesse" options={["Trabalhar", "Contratar"]} />

      <AtomComponent.Button variant="secondary" type="submit">
        Próximo
      </AtomComponent.Button>

      <p className="text-gray01 text-sm text-center mt-4">
        Já está cadastrado? <MoleculeComponent.AuthLink text="Login" href="/login" />
      </p>
    </form>
  );
}
