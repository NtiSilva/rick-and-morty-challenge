// src/app/page.tsx
'use client'

import { useCharacters } from './hooks/useCharacters';
import { useSearchParams } from 'next/navigation';
import { Search } from '@/components/Search';
import { Pagination } from '@/components/Pagination';

export default function CharacterPage() {
  const searchParams = useSearchParams()
  
  const name = searchParams.get('name') || ''
  const page = Number(searchParams.get('page')) || 1

  const { data, isLoading, isPlaceholderData } = useCharacters(page, name);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Characters</h1>

      <Search />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aqui você pode colocar seus Skeletons */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data?.results.map((char) => (
              <div key={char.id} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img src={char.image} alt={char.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-bold text-lg truncate">{char.name}</h2>
                  <p className="text-slate-500 text-sm">{char.species} • {char.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Passamos o total de páginas que vem da API */}
          <Pagination totalPages={data?.info.pages || 0} />
        </>
      )}
    </main>
  );
}