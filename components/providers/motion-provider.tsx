'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import type { WithChildren } from '@/types';

/**
 * Configura o Framer Motion globalmente:
 * - `LazyMotion` + `domAnimation`: carrega apenas o subconjunto necessário de
 *   features (bundle menor → melhor performance).
 * - `MotionConfig reducedMotion="user"`: respeita automaticamente
 *   `prefers-reduced-motion` em todas as animações declarativas.
 *
 * Observação: ao usar LazyMotion, prefira os componentes `m.*`
 * (ex.: `import { m } from 'framer-motion'`) em vez de `motion.*`.
 */
export function MotionProvider({ children }: WithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
