'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Estado sincronizado com LocalStorage, tipado e SSR-safe.
 *
 * É a base de persistência das preferências de acessibilidade
 * (fonte, contraste, daltonismo, etc.). Sincroniza entre abas via evento
 * `storage`. No servidor, retorna sempre o valor inicial.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Lê o valor real do storage somente no cliente, após a montagem.
  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        try {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(next));
          }
        } catch {
          // Silencioso: modo privado / cota excedida não deve quebrar a UI.
        }
        return next;
      });
    },
    [key]
  );

  // Mantém abas em sincronia.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          setStoredValue(JSON.parse(event.newValue) as T);
        } catch {
          /* ignora payload inválido */
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [key]);

  return [storedValue, setValue];
}
