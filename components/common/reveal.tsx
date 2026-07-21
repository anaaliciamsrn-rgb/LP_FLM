'use client';

import { m, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Reveal — revela o conteúdo com fade/slide sutil quando entra na viewport.
 * `once` evita re-disparo no scroll; o deslocamento é pequeno (18px) para
 * degradar bem com reduced-motion (tratado globalmente pelo MotionProvider).
 * Nunca esconde conteúdo permanentemente: anima apenas na entrada.
 */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
}

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = m[as];
  return (
    <MotionTag
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
