'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
          router.push(`/pesquisa?nome=${encodeURIComponent(query)}`);
        }
      };
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md">
      <SearchIcon className="relative top-3 left-8 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Pesquisar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        maxLength={64}
        className="w-full pl-10 pr-4 py-2 text-black rounded bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </form>
  );
}
