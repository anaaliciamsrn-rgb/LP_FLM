import type { Variants } from 'framer-motion';

/**
 * Biblioteca central de animações.
 *
 * Filosofia: movimento discreto, elegante e curto. Nada bloqueia leitura,
 * esconde conteúdo ou cria telas vazias durante o scroll.
 *
 * IMPORTANTE: o respeito a `prefers-reduced-motion` é feito em runtime pelo
 * hook `useReducedMotion` / MotionProvider. As variantes abaixo assumem
 * deslocamentos pequenos justamente para degradar bem quando reduzidas.
 */

// Curva de easing padrão do projeto (suave, sem "bounce").
export const EASE_STANDARD: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
} as const;

/** Fade puro — o fallback mais seguro. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_STANDARD },
  },
};

/** Fade + leve subida (deslocamento pequeno: 16px). */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_STANDARD },
  },
};

/** Container que revela filhos em sequência (efeito de cascata sutil). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Configuração padrão para revelar no scroll sem re-disparar. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
