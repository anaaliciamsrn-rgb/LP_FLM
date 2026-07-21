import type { ReactNode } from 'react';
import { Container } from '@/components/common/container';
import { cn } from '@/lib/utils';

/**
 * Section — padroniza o espaçamento vertical e os fundos permitidos pela
 * identidade (branco, cinza claro, azul claro). Mantém o alinhamento e o
 * "respiro" consistentes em toda a página.
 */
interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'muted' | 'tint';
  'aria-labelledby'?: string;
}

const BACKGROUNDS: Record<NonNullable<SectionProps['background']>, string> = {
  white: 'bg-background',
  muted: 'bg-muted/60',
  tint: 'bg-accent/40',
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  background = 'white',
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-16 sm:py-20 lg:py-28', BACKGROUNDS[background], className)}
      {...aria}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
