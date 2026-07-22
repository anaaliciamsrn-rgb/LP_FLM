import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants/site';

interface LogoProps {
  className?: string;
}

/**
 * Wordmark do Grupo FLM.
 *
 * Usamos um wordmark tipográfico para não depender (hotlink) do asset oficial.
 * Para trocar pelo logo definitivo: coloque `logo.svg` em `public/icons/` e
 * substitua o conteúdo interno por <Image src="/icons/logo.svg" ... />.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
  href="/"
  aria-label={`${SITE_CONFIG.name} — página inicial`}
  className={cn(
    'group inline-flex items-center gap-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    className
  )}
>
  {/* Espaço reservado para o logotipo em formato de imagem */}
  <img 
    src="/images/logo.png" // Altere para o caminho correto do arquivo na pasta public
    alt={`Logotipo oficial do ${SITE_CONFIG.name}`}
    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
</Link>
  );
}
