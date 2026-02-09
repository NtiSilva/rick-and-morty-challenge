// src/app/page.tsx
'use client'

import { CharacterSkeleton } from './components/CharacterSkelenton';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { useCharacters } from './hooks/useCharacters';
import { useSearchParams } from 'next/navigation';

export default function CharacterPage() {
  const searchParams = useSearchParams()
  
  const name = searchParams.get('name') || ''
  const page = Number(searchParams.get('page')) || 1

  const { data, isLoading, isPlaceholderData } = useCharacters(page, name);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <Search />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          // Renderiza 6 skeletons enquanto carrega
          Array.from({ length: 6 }).map((_, i) => (
            <CharacterSkeleton key={i} />
          ))
        ) : (
          // Renderiza os dados reais
          data?.results.map((char) => (
            <div 
              key={char.id} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all ${
                isPlaceholderData ? 'opacity-50 grayscale' : 'hover:shadow-lg'
              }`}
            >
              <img src={char.image} alt={char.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-lg truncate">{char.name}</h2>
                <p className="text-slate-500 text-sm">{char.species} • {char.status}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {!isLoading && <Pagination totalPages={data?.info.pages || 0} />}

    </main>
  )
}