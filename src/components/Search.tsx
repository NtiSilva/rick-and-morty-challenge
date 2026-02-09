'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Função sênior: manipula a URL sem dar refresh na página
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    
    // Resetamos a página para 1 sempre que uma nova busca é feita
    params.set('page', '1')

    if (term) {
      params.set('name', term)
    } else {
      params.delete('name')
    }

    // Atualiza a URL com os novos parâmetros (ex: /?name=rick&page=1)
    replace(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <div className="relative mb-8">
      <input
        type="text"
        className="w-full p-4 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        placeholder="Busque personagens (ex: Rick, Morty, Summer...)"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('name')?.toString()}
      />
    </div>
  )
}