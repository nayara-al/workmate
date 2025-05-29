'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IProfessional } from '@/interface/IProfessional';
import MoleculeComponent from '.';
import { fetchFilteredProfessionals } from '@/service/professionalService';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome') ?? '';
  const localizacao = searchParams.get('localizacao') ?? '';
  const subcategoriaNome = searchParams.get('subcategoriaNome');
  const notaMinima = searchParams.get('notaMinima');

  const [profissionais, setProfissionais] = useState<IProfessional[]>([]);

  useEffect(() => {
    const subcategoriaNomeParsed = subcategoriaNome ? parseInt(subcategoriaNome) : undefined;
    const notaMinimaParsed = notaMinima ? parseFloat(notaMinima) : undefined;

    fetchFilteredProfessionals({
      nome,
      localizacao,
      subcategoriaNome: subcategoriaNomeParsed,
      notaMinima: notaMinimaParsed,
    })
      .then((res) => setProfissionais(res))
      .catch((err) => console.error('Erro ao buscar profissionais:', err));
  }, [nome, localizacao, subcategoriaNome, notaMinima]);

  return (
    <main className="flex flex-col w-3/4 justify-start items-start p-6 gap-8">
      <div className="bg-secondary text-primary px-4 w-124 py-2 rounded flex items-center justify-center">
        <h1 className="font-semibold w-1/3">Resultados para:</h1>
        <span className="capitalize w-2/3 bg-white p-2 rounded-sm text-black font-normal">
          {nome || '...'}
        </span>
      </div>

      {profissionais.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {profissionais.map((prof) => (
            <MoleculeComponent.ProfessionalCard key={prof.id} {...prof} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Nenhum resultado encontrado.</p>
      )}
    </main>
  );
}
