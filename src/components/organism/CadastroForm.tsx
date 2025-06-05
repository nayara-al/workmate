/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from "react";
import AtomComponent from "../atoms";
import { IFormData } from "@/interface/IForm";
import { localizacoes } from "@/json/localizacoes";
import { registerUser } from "@/service/authService";
import { RegisterRequest } from "@/interface/IUser";
import { useRouter } from 'next/navigation';
import MoleculeComponent from "../molecules";

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
    fotoPerfil: '',
    disponibilidade: '',
    formacao: '',
    experiencia: '',
  });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(field: keyof IFormData, value: string) {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'estado' ? { cidade: '' } : {})
    }));
  }

  function onChangeHandler(field: keyof IFormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;
      handleChange(field, value);
    };
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

  function mapFormDataToRegisterRequest(data: IFormData): RegisterRequest {
    return {
      userName: data.userName,
      nome: data.nome,
      email: data.email,
      password: data.password,
      tipoUsuario: data.tipoUsuario as 'Cliente' | 'Prestador',
      estado: data.estado,
      cidade: data.cidade,
      fotoPerfil: data.fotoPerfil || '',
      disponibilidade: data.disponibilidade || '',
      formacao: data.formacao || '',
      experiencia: data.experiencia || ''
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.tipoUsuario.toLowerCase() === 'cliente') {
      try {
        const registerData = mapFormDataToRegisterRequest({
          ...formData,
          disponibilidade: '',
          formacao: '',
          experiencia: ''
        });
        await registerUser(registerData);

        localStorage.setItem('cadastroCliente', JSON.stringify(formData));
        alert('Cadastro salvo com sucesso!');
      } catch (error: any) {
        const messages = error?.response?.data?.errors || [error.message || 'Erro desconhecido'];
        setErrorMessages(Array.isArray(messages) ? messages : [messages]);
        setShowErrorModal(true);
      } finally {
        setIsLoading(false);
      }
    } else if (formData.tipoUsuario.toLowerCase() === 'prestador') {
      localStorage.setItem('cadastroDadosEtapa1', JSON.stringify(formData));
      router.push('/cadastro-trabalhador');
    }
  }

  return (
    <>
      {isLoading && <AtomComponent.LoadingSpinner message="Salvando cadastro..." />}

      {!isLoading && (
        <form className="w-full max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <AtomComponent.Label htmlFor="nome">Nome</AtomComponent.Label>
            <AtomComponent.Input
              id="nome"
              type="text"
              value={formData.nome}
              onChange={onChangeHandler('nome')}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="email">Email</AtomComponent.Label>
            <AtomComponent.Input
              id="email"
              type="email"
              value={formData.email}
              onChange={onChangeHandler('email')}
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="userName">Nome de usuário</AtomComponent.Label>
            <AtomComponent.Input
              id="userName"
              type="text"
              value={formData.userName}
              onChange={onChangeHandler('userName')}
              placeholder="Nome de usuário"
            />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="password">Senha</AtomComponent.Label>
            <AtomComponent.Input
              id="password"
              type="password"
              value={formData.password}
              onChange={onChangeHandler('password')}
              placeholder="Digite sua senha"
            />
            <MoleculeComponent.PasswordChecklist password={formData.password} />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="estado">Estado</AtomComponent.Label>
            <AtomComponent.Select
              id="estado"
              value={formData.estado}
              onChange={onChangeHandler('estado')}
              options={estadoOptions}
            />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="cidade">Cidade</AtomComponent.Label>
            <AtomComponent.Select
              id="cidade"
              value={formData.cidade}
              onChange={onChangeHandler('cidade')}
              options={cidadesOptions}
              disabled={!formData.estado}
            />
          </div>

          <div className="mb-4">
            <AtomComponent.Label htmlFor="tipoUsuario">Tipo de usuário</AtomComponent.Label>
            <AtomComponent.Select
              id="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={onChangeHandler('tipoUsuario')}
              options={tipoUsuarioOptions}
            />
          </div>

          <AtomComponent.Button variant="secondary" type="submit">
            {formData.tipoUsuario === 'Cliente' ? 'Salvar' : 'Próximo'}
          </AtomComponent.Button>
        </form>
      )}

      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Erro no Cadastro</h2>
            <ul className="text-red-500 list-disc list-inside">
              {errorMessages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
            <button
              className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
              onClick={() => setShowErrorModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
