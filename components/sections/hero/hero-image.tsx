'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * HeroImage — fotografia PROTAGONISTA da Hero (não é um card).
 *
 * Ocupa todo o fundo da Hero. Sobre ela aplicamos um gradiente branco
 * extremamente suave para garantir a legibilidade do texto (navy sobre branco
 * = contraste AA). O fundo `bg-secondary` funciona como rede de segurança:
 * se a imagem demorar ou falhar, a área permanece clara e o texto legível.
 *
 * SUBSTITUIÇÃO
 * Troque `TEMP_IMAGE` por: imagem definitiva/local em `public/images`,
 * imagem gerada por IA, ou substitua o <Image> por um <video> (mantendo
 * `absolute inset-0 h-full w-full object-cover`).
 */

// TEMPORÁRIA (Unsplash) — casal/idoso transmitindo autonomia e bem-estar.
// Para trocar a foto, altere apenas esta URL.
const TEMP_IMAGE =
  'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1920&q=80';

interface HeroImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function HeroImage({
  src = TEMP_IMAGE,
  alt = 'Casal de idosos sorridente ao ar livre, transmitindo autonomia, segurança e qualidade de vida',
  className,
}: HeroImageProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 bg-secondary', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30 md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent"
      />
    </div>
  );
}
