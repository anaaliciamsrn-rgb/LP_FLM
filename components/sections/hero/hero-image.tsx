'use client';

import Image from 'next/image';
import { m, useReducedMotion } from 'framer-motion';

/**
 * HeroImage — fundo cinematográfico da Hero.
 *
 * A imagem já foi produzida com o degradê azul embutido à esquerda — por
 * isso não há overlay extra no desktop (a composição original é preservada
 * em telas largas). No mobile, o corte é horizontal, então reforçamos com
 * um gradiente azul adicional para legibilidade.
 *
 * A transição para a próxima seção é reforçada (gradiente mais alto + uma
 * fina camada com blur na borda) para que a Hero "desapareça" suavemente,
 * sem corte seco.
 */
const HERO_IMAGE = '/images/hero-background.png';

export function HeroImage() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-primary">
      <m.div
        className="absolute inset-0"
        animate={reduce ? undefined : { scale: [1, 1.025, 1] }}
        transition={
          reduce ? undefined : { duration: 22, ease: 'easeInOut', repeat: Infinity }
        }
      >
        <Image
          src={HERO_IMAGE}
          alt="Casal de idosos caminhando de mãos dadas à beira de um lago, ao entardecer, transmitindo autonomia, cuidado e tranquilidade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_38%] md:object-[center_40%]"
        />
      </m.div>

      {/* Reforço de legibilidade SOMENTE no mobile. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,hsl(213_62%_12%/0.85)_0%,hsl(213_62%_14%/0.55)_38%,hsl(213_62%_16%/0.15)_60%,transparent_78%)] md:hidden"
      />

      {/* Transição para a próxima seção — mais alta, com leve blur na borda. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/70 to-transparent sm:h-44 lg:h-56"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-14 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black,transparent)] sm:h-16"
      />
    </div>
  );
}
