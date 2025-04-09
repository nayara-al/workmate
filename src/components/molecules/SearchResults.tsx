'use client';
import { useSearchParams } from 'next/navigation';
import professionals from '@/json/professional.json';
import MoleculeComponent from '.';

export default function SearchResults() {
    const searchParams = useSearchParams();
    const nome = searchParams.get('nome')?.toLowerCase();

    const filteredResults = professionals.filter((prof) => {
        const matchesNome = nome ? prof.name.toLowerCase().includes(nome) : true;
        return matchesNome;
      });

  return (
    <main className="flex flex-col w-3/4 justify-start items-start p-6 gap-8">
      <div className="bg-secondary text-primary px-4 w-124 py-2 rounded flex items-center justify-center">
        <h1 className="font-semibold w-1/3">
          Resultados para:
        </h1>
        <span className="capitalize w-2/3 bg-white p-2 rounded-sm text-black font-normal">{nome || '...'}</span>
      </div>

      {filteredResults.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filteredResults.map((prof, idx) => (
            <MoleculeComponent.ProfessionalCard key={idx} {...prof} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Nenhum resultado encontrado.</p>
      )}
    </main>
  );
}
