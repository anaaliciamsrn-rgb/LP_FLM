'use client';

import { useEffect, useState } from 'react';

/**
 * Retorna `true` somente após a montagem no cliente.
 * Útil para renderizar com segurança qualquer coisa que dependa de
 * `window`, `localStorage` ou preferências do usuário, evitando
 * divergência de hidratação (hydration mismatch).
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
