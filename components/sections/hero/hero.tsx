import { HeroContent } from '@/components/sections/hero/hero-content';
import { HeroImage } from '@/components/sections/hero/hero-image';

/**
 * Hero — primeira dobra. Fotografia protagonista ao fundo, texto sobreposto
 * à esquerda (desktop) e sobre a base clara (mobile). Sem overflow horizontal
 * e legível em qualquer largura.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[88svh] items-center overflow-hidden pb-16 pt-28 sm:min-h-[90svh] lg:pt-32"
    >
      <HeroImage />
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div id="hero-heading">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
