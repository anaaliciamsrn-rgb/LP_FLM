import { Container, SectionHeading, Reveal } from '@/components/common';
import { POSSIBILITIES_ITEMS } from '@/constants/content';

/**
 * Possibilidades — formatos de plano disponíveis.
 *
 * Seção institucional: mesmo tratamento visual do "Como funciona" (fundo
 * azul-marinho + grid discreto), com destaque em azul-claro nos ícones e no
 * hover dos cards — cor diferente da usada em "O que analisamos" (vermelho),
 * para as duas seções não competirem pela mesma cor de destaque.
 */
export function PossibilitiesSection() {
  return (
    <section
      id="possibilidades"
      aria-labelledby="possibilidades-title"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
      style={{
        background: 'linear-gradient(160deg, hsl(213 66% 11%) 0%, hsl(213 60% 19%) 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative">
        <SectionHeading
          id="possibilidades-title"
          tone="light"
          eyebrow="Caminhos possíveis"
          title="Opções que se encaixam no seu momento"
          description="Individual, familiar, por adesão ou planos sênior — encontramos o formato certo para você e para quem você cuida."
          className="mb-12 max-w-2xl"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POSSIBILITIES_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 4) * 0.07}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8ec5ff]/50 hover:shadow-[0_0_0_1px_rgba(142,197,255,0.35),0_16px_32px_-12px_rgba(142,197,255,0.3)]">
                <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-[#8ec5ff] transition-colors group-hover:bg-[#8ec5ff] group-hover:text-[hsl(213_62%_14%)]">
                  <item.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
