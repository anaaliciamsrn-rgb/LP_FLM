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
        'group inline-flex items-baseline gap-1.5 rounded-md font-heading text-xl font-extrabold tracking-tight text-primary',
        className
      )}
    >
      <span>Grupo</span>
      <span className="relative text-danger">
        FLM
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-danger transition-transform duration-300 group-hover:scale-x-100"
        />
      </span>
    </Link>
  );
}
