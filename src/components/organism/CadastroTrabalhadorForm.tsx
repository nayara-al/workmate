'use client';

import { useRouter } from 'next/navigation';
import AtomComponent from '../atoms';

export default function CadastroTrabalhadorForm() {
  const areaOptions = ['Tecnologia e TI', 'Saúde', 'Educação'];
  const especializacaoOptions = ['Designer', 'Desenvolvedor', 'Analista de Dados'];

  const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      router.push('/catalogo');
    };
  

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <AtomComponent.Label htmlFor="area">Área De Atuação</AtomComponent.Label>
          <AtomComponent.Select id="area" options={areaOptions} />
        </div>

        <div className="w-full mb-6">
          <AtomComponent.Label htmlFor="especializacao">Especialização?</AtomComponent.Label>
          <AtomComponent.Select id="especializacao" options={especializacaoOptions} />
        </div>

        <div className="w-full mb-6">
          <h3 className="text-primary font-semibold text-sm mb-2">Informações Profissionais</h3>
          <AtomComponent.TextBox
            id="sobre"
            placeholder="Fale um pouco sobre você..."
          />
          <div className="bg-gray-100 p-4 rounded text-sm text-gray-800 whitespace-pre-line">

          </div>
        </div>

        <div className="w-full mb-6">
          <h3 className="text-primary font-semibold text-sm mb-2">Serviços Oferecidos</h3>
          <AtomComponent.TextBox
            id="servicos-descricao"
            placeholder="Fale sobre os serviços que pretende prestar"
          />
        </div>

        <div className="w-full">
          <AtomComponent.Button variant="primary">Cadastrar</AtomComponent.Button>
        </div>

        <p className="text-sm mt-4 text-center text-gray-600 w-full">
          Já está cadastrado? <a href="/login" className="text-blue-600 hover:underline">Faça o Login</a>
        </p>
    </form>
  );
}
