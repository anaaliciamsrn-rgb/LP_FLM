import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * `cn` — combina classes condicionais (clsx) e resolve conflitos do Tailwind
 * (tailwind-merge). É o utilitário central de composição de classes do projeto.
 *
 * @example cn('px-2', condition && 'px-4') // -> 'px-4'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Monta uma URL absoluta a partir de um path relativo usando a URL canônica
 * do site. Útil para Open Graph, canonical e sitemap.
 */
export function absoluteUrl(path = ''): string {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.grupoflm.com.br'
  ).replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized === '/' ? '' : normalized}`;
}
