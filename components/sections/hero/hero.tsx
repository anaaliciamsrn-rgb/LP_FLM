'use client';

import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/common/container';
import { HeroContent } from '@/components/sections/hero/hero-content';
import { HeroImage } from '@/components/sections/hero/hero-image';

/**
 * Hero cinematográfica — a fotografia (com degradê azul embutido) é o fundo
 * inteiro (~95–100vh). Conteúdo mais compacto (menos respiro vertical) para
 * ficar melhor "encaixado". Parallax extremamente discreto no scroll.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[95svh] items-center overflow-hidden lg:min-h-[100svh]"
    >
      <m.div className="absolute inset-x-0 -inset-y-20" style={reduce ? undefined : { y }}>
        <HeroImage />
      </m.div>

      <m.div style={reduce ? undefined : { y: contentY }} className="relative z-10 w-full">
        <Container className="py-20 lg:py-24">
          <div id="hero-heading">
            <HeroContent />
          </div>
        </Container>
      </m.div>
    </section>
  );
}
