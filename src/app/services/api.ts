import { ApiResponse, Character } from "../types/character";

export const getCharacters = async (page = 1, name = ''): Promise<ApiResponse<Character>> => {
  const searchParams = new URLSearchParams({
    page: String(page), 
    ...(name && { name }),
  });

  const res = await fetch(`https://rickandmortyapi.com/api/character/?${searchParams.toString()}`);
  
  if (!res.ok) {
    if (res.status === 404) return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    throw new Error('Falha ao buscar personagens');
  }

  return res.json();
};