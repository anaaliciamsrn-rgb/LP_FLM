'use client';

import { m, type Variants } from 'framer-motion';
import { HandHeart, Scale, ShieldCheck } from 'lucide-react';
import { HeroActions } from '@/components/sections/hero/hero-actions';

/**
 * Texto da Hero — flutua sobre o degradê azul embutido na fotografia.
 * Entrada em cortina (sobe) + fade.
 */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const curtain: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const BENEFITS = [
  { icon: ShieldCheck, label: 'Atendimento humano' },
  { icon: Scale, label: 'Comparação imparcial' },
  { icon: HandHeart, label: 'Suporte contínuo' },
];

export function HeroContent() {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex max-w-xl flex-col items-start text-left"
    >
      <m.span
        variants={fadeUp}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-danger" />
        Plano de Saúde • Terceira Idade
      </m.span>

      {/* Título — quebra corrigida: "cada fase da vida." fica junto na mesma linha. */}
      <div className="overflow-hidden pb-1">
        <m.h1
          variants={curtain}
          className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Cuidado e segurança
          <br />
          para viver bem
          <br />
          cada fase da <span className="text-[#8ec5ff]">vida.</span>
        </m.h1>
      </div>

      <m.p variants={fadeUp} className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
        Ajudamos você a encontrar o plano de saúde certo — para si, seus pais ou
        familiares — considerando idade, região, rede médica e orçamento.
      </m.p>

      <m.div variants={fadeUp} className="mt-7 w-full max-w-lg">
        <HeroActions />
      </m.div>

      <m.ul
        variants={fadeUp}
        className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-5"
      >
        {BENEFITS.map((b, i) => (
          <li key={b.label} className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
              <b.icon aria-hidden="true" className="size-4 text-[#8ec5ff]" />
              {b.label}
            </span>
            {i < BENEFITS.length - 1 && (
              <span aria-hidden="true" className="h-4 w-px bg-white/20" />
            )}
          </li>
        ))}
      </m.ul>
    </m.div>
  );
}
