'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchIcon from "@mui/icons-material/Search";
import { ISubcategoria } from '@/interface/ICategoria';
import { fetchSubcategorias } from '@/service/catogoryService';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ISubcategoria[]>([]);
  const [allSubcategorias, setAllSubcategorias] = useState<ISubcategoria[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadSubcategorias() {
      const data = await fetchSubcategorias();
      setAllSubcategorias(data);
    }
    loadSubcategorias();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = allSubcategorias.filter(sub =>
      sub.nome.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (sub: ISubcategoria) => {
    setQuery(sub.nome);
    setSuggestions([]);

    router.push(`/pesquisa?subcategoriaNome=${encodeURIComponent(sub.nome)}`);
  };

  return (
    <div className="relative w-full max-w-md text-black">
      <form className="flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
        <SearchIcon className="relative top-3 left-8 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="O que está procurando?"
          value={query}
          onChange={handleChange}
          maxLength={64}
          className="w-full pl-10 pr-4 py-2 text-black rounded bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((sub) => (
            <li
              key={sub.id}
              onClick={() => handleSelect(sub)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {sub.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
