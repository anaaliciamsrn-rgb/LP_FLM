'use client';

import { useMediaQuery } from '@/hooks/use-media-query';

/**
 * Retorna `true` quando as animações devem ser reduzidas.
 *
 * Baseia-se na media query do sistema `prefers-reduced-motion`. A Toolbar de
 * Acessibilidade (FASE futura) poderá forçar este estado via LocalStorage;
 * quando implementada, este hook passará a considerar também o override manual.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
