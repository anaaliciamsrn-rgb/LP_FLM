import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Container — centraliza o conteúdo com largura máxima e padding responsivo.
 * `as` permite renderizar semanticamente (section, main, header, footer...).
 */
interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Container({
  as: Tag = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
