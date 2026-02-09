// src/components/Pagination.tsx
'use client'

import { PaginationProps } from '@/app/types/character'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Pega a página atual da URL ou define como 1
  const currentPage = Number(searchParams.get('page')) || 1

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', newPage.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-6 py-2 bg-slate-800 text-white rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
      >
        Anterior
      </button>

      <span className="text-sm font-medium">
        Página <span className="text-blue-500">{currentPage}</span> de {totalPages || 1}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-6 py-2 bg-slate-800 text-white rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
      >
        Próxima
      </button>
    </div>
  )
}