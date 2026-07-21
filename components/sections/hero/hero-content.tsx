'use client';

import { m, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { HeroActions } from '@/components/sections/hero/hero-actions';

/**
 * Texto da Hero, sobreposto à fotografia. Fade discreto em cascata ao
 * carregar. Conteúdo nunca é escondido no scroll (anima só na entrada).
 */

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const TRUST = ['Atendimento humano', 'Cotação sem compromisso', 'Opções individuais e familiares'];

export function HeroContent() {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex max-w-2xl flex-col items-start"
    >
      <m.span
        variants={item}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-danger" />
        Plano de Saúde · Terceira Idade
      </m.span>

      <m.h1 variants={item} className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
        Cuidado e segurança para viver bem{' '}
        <span className="text-primary">cada fase da vida.</span>
      </m.h1>

      <m.p
        variants={item}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
      >
        Ajudamos você a encontrar um plano de saúde adequado para si, seus pais ou
        familiares, considerando idade, região, rede médica e orçamento.
      </m.p>

      <m.div variants={item} className="mt-8 w-full max-w-lg">
        <HeroActions />
      </m.div>

      <m.ul
        variants={item}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6"
      >
        {TRUST.map((label) => (
          <li key={label} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <span
              aria-hidden="true"
              className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
            >
              <Check className="size-3.5" />
            </span>
            {label}
          </li>
        ))}
      </m.ul>
    </m.div>
  );
}
