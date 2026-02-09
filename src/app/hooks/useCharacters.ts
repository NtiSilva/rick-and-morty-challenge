// src/hooks/useCharacters.ts
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getCharacters } from '../services/api';

export function useCharacters(page: number, searchTerm: string) {
  return useQuery({
    queryKey: ['characters', page, searchTerm], 
    queryFn: () => getCharacters(page, searchTerm),
    staleTime: 1000 * 30,
    placeholderData: keepPreviousData,
  });
}