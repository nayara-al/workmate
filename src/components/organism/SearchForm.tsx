import { Suspense } from 'react';
import Filter from "../molecules/Filter";
import SearchResults from "../molecules/SearchResults";

export default function SearchForm() {
  return (
   <div className="w-full min-h-[calc(100vh-4rem)] flex bg-gray-100">
        <Filter/>
        <Suspense fallback={<div>Carregando resultados...</div>}>
            <SearchResults/>
        </Suspense>
    </div>
  )
}
