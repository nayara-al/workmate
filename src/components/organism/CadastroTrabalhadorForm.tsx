'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import AtomComponent from '../atoms';
import { registerUser } from '@/service/authService';

interface CadastroTrabalhadorFormData {
  experiencia: string;
  disponibilidade: string;
  formacao: string;
}

export default function CadastroTrabalhadorForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<CadastroTrabalhadorFormData>({
    experiencia: '',
    disponibilidade: '',
    formacao: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('cadastroDados', JSON.stringify(formData));
  }, [formData]);

  function handleChange(field: keyof CadastroTrabalhadorFormData, value: string) {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem('cadastroDadosEtapa2', JSON.stringify(updated));
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true); // inicia loading

    try {
      const etapa1Str = localStorage.getItem('cadastroDadosEtapa1');
      const etapa2Str = localStorage.getItem('cadastroDadosEtapa2');

      if (!etapa1Str || !etapa2Str) {
        alert('Dados da primeira ou segunda etapa não encontrados.');
        setLoading(false);
        return;
      }

      const etapa1 = JSON.parse(etapa1Str);
      const etapa2 = JSON.parse(etapa2Str);

      const registerData = {
        ...etapa1,
        ...etapa2,
        tipoUsuario: 'Prestador',
      };

      await registerUser(registerData);

      localStorage.removeItem('cadastroDadosEtapa1');
      localStorage.removeItem('cadastroDadosEtapa2');

      alert('Cadastro concluído com sucesso!');
      router.push('/login');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      alert(`Erro ao cadastrar: ${errorMessage}`);
    } finally {
      setLoading(false); // termina loading
    }
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="w-full mb-6">
        <AtomComponent.Label htmlFor="experiencia">Especialização</AtomComponent.Label>
        <AtomComponent.TextBox
          id="experiencia"
          value={formData.experiencia}
          onChange={e => handleChange('experiencia', e.target.value)}
        />
      </div>

      <div className="w-full mb-6">
        <AtomComponent.Label htmlFor="disponibilidade">Disponibilidade</AtomComponent.Label>
        <AtomComponent.TextBox
          id="disponibilidade"
          placeholder="Informe seus horários, dias ou disponibilidade geral"
          value={formData.disponibilidade}
          onChange={e => handleChange('disponibilidade', e.target.value)}
        />
      </div>

      <div className="w-full mb-6">
        <AtomComponent.Label htmlFor="formacao">Experiência</AtomComponent.Label>
        <AtomComponent.TextBox
          id="formacao"
          placeholder="Conte um pouco sobre sua experiência profissional"
          value={formData.formacao}
          onChange={e => handleChange('formacao', e.target.value)}
        />
      </div>

      <div className="w-full">
        <AtomComponent.Button variant="primary" type="submit" disabled={loading}>
          {loading ? <AtomComponent.LoadingSpinner /> : 'Cadastrar'}
        </AtomComponent.Button>
      </div>
    </form>
  );
}
