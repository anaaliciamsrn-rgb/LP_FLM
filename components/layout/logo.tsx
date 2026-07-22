import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/constants/site';

interface LogoProps {
  className?: string;
}

/**
 * Logo oficial do Grupo FLM (asset em public/icons/logo.png).
 * Renderizado com next/image (fill removido: usamos largura/altura fixas
 * proporcionais para não distorcer). Ajuste a altura via `className` se
 * precisar (ex.: "h-9" no rodapé).
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${SITE_CONFIG.name} — página inicial`}
      className={cn('inline-flex items-center', className)}
    >
      <Image
        src="/icons/logo.png"
        alt={SITE_CONFIG.name}
        width={200}
        height={200}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
