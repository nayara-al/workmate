/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from "react";
import MoleculeComponent from "../molecules";
import AtomComponent from "../atoms";
import { IFormData } from "@/interface/IForm";
import { localizacoes } from "@/json/localizacoes";
import { registerUser } from "@/service/authService";
import { RegisterRequest } from "@/interface/IUser";
import { useRouter } from 'next/navigation';

export default function CadastroForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    nome: '',
    userName: '',
    email: '',
    password: '',
    estado: '',
    cidade: '',
    tipoUsuario: '',
    fotoPerfil: ''
  });

  function handleChange(field: keyof IFormData, value: string) {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'estado' ? { cidade: '' } : {})
    }));
  }

type SelectOption = { value: string; label: string };

const estadoOptions: SelectOption[] = localizacoes.estados.map(estado => ({
  value: estado.sigla,  
  label: estado.nome    
}));

const cidadesOptions: SelectOption[] = (() => {
  if (!formData.estado) return [];
  const estadoSelecionado = localizacoes.estados.find(
    (e) => e.sigla === formData.estado
  );
  if (!estadoSelecionado) return [];
  return estadoSelecionado.cidades.map((cidade) => ({
    value: cidade,
    label: cidade,
  }));
})();

const tipoUsuarioRaw = ['Cliente', 'Prestador'];

  const tipoUsuarioOptions: SelectOption[] = tipoUsuarioRaw.map(option => ({
  value: option.toLowerCase(), 
  label: option,               
}));

  function onChangeHandler(field: keyof IFormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      handleChange(field, e.target.value);
    };
  }

  function mapFormDataToRegisterRequest(data: IFormData): RegisterRequest {
  return {
    userName: data.userName, 
    nome: data.nome,
    email: data.email,
    password: data.password,
    tipoUsuario: data.tipoUsuario as 'Cliente' | 'Prestador', 
    estado: data.estado,
    cidade: data.cidade,
  };
}


async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (formData.tipoUsuario.toLowerCase() === 'cliente') {
    try {
      const registerData = mapFormDataToRegisterRequest(formData);
      await registerUser(registerData);

      localStorage.setItem('cadastroCliente', JSON.stringify(formData));
      alert('Cadastro salvo com sucesso!');
    } catch (error: any) {
      alert(`Erro ao salvar cadastro: ${error.message || error}`);
    }
  } else if (formData.tipoUsuario.toLowerCase() === 'prestador') {
    localStorage.setItem('cadastroDadosEtapa1', JSON.stringify(formData));
    router.push('/cadastro-trabalhador');
  }
}

  return (
    <form className="w-full max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
      <MoleculeComponent.FormField
        id="nome"
        label="Nome"
        type="text"
        value={formData.nome}
        onChange={onChangeHandler('nome')}
        placeholder="Digite seu nome"
      />

      <MoleculeComponent.FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={onChangeHandler('email')}
        placeholder="Digite seu email"
      />

      <MoleculeComponent.FormField
        id="userName"
        label="Nome de usuário"
        type="text"
        value={formData.userName}
        onChange={onChangeHandler('userName')}
        placeholder="Nome de usuário"
      />

      <MoleculeComponent.FormField
        id="password"
        label="Senha"
        type="password"
        value={formData.password}
        onChange={onChangeHandler('password')}
        placeholder="Digite sua senha"
      />

      <MoleculeComponent.FormField
        label="Estado"
        id="estado"
        options={estadoOptions}
        value={formData.estado}
        onChange={onChangeHandler('estado')}
      />

      <MoleculeComponent.FormField
        label="Cidade"
        id="cidade"
        options={cidadesOptions}
        value={formData.cidade}
        onChange={onChangeHandler('cidade')}
      />

      <MoleculeComponent.FormField
        label="Tipo de usuário"
        id="tipoUsuario"
        options={tipoUsuarioOptions}
        value={formData.tipoUsuario}
        onChange={onChangeHandler('tipoUsuario')}
      />
      {formData.tipoUsuario === 'Cliente' ? <AtomComponent.Button variant="secondary" type="submit">
        Salvar
      </AtomComponent.Button> : <AtomComponent.Button variant="secondary" type="submit">
        Próximo  
      </AtomComponent.Button>
      }
    </form>
  );
}
