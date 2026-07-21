import type { ReactNode } from 'react';
import { Reveal } from '@/components/common/reveal';
import { cn } from '@/lib/utils';

/**
 * SectionHeading — cabeçalho de seção com eyebrow discreta, título e
 * subtítulo opcional. Alinhamento à esquerda (padrão) ou centralizado.
 */
interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
  className?: string;
  as?: 'h2' | 'h3';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        centered ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 text-sm font-bold uppercase tracking-widest text-danger">
          {eyebrow}
        </span>
      )}
      <Heading
        id={id}
        className={cn(
          'text-3xl text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          centered && 'max-w-2xl'
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-muted-foreground',
            centered ? 'max-w-2xl' : 'max-w-prose'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
