'use client'

import { useRouter } from 'next/navigation'

export const EmptyState = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">👽</div>
      <h2 className="text-2xl font-bold text-slate-800">Nenhum personagem encontrado</h2>
      <p className="text-slate-500 mt-2 max-w-xs">
        Parece que sua busca não retornou resultados. Tente ajustar os filtros ou o nome.
      </p>
      
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium"
      >
        Limpar busca
      </button>
    </div>
  )
}