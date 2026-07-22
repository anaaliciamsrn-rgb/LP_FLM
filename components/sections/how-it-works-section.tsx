import { Container, SectionHeading, Reveal } from '@/components/common';
import { STEPS_ITEMS } from '@/constants/content';

/**
 * Como funciona — timeline SEMPRE vertical (mais legível que espremer o
 * texto em colunas horizontais, e o olho acompanha melhor de cima pra
 * baixo). Entrada dos passos mais rápida (delay menor entre eles).
 *
 * Seção institucional: fundo azul-marinho com grid extremamente discreto.
 */
export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
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
          id="como-funciona-title"
          align="center"
          tone="light"
          eyebrow="Simples do início ao fim"
          title="Como funciona"
          description="Quatro passos claros — do primeiro contato à decisão tranquila."
          className="mx-auto mb-14"
        />

        <ol className="relative mx-auto flex max-w-2xl flex-col gap-8">
          {/* Linha de conexão vertical à esquerda, atrás dos números. */}
          <span aria-hidden="true" className="absolute left-6 top-0 h-full w-px bg-white/15" />

          {STEPS_ITEMS.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 0.18} className="relative">
              <div className="flex items-start gap-5">
                <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-danger font-heading text-lg font-bold text-danger-foreground shadow-[0_8px_20px_-6px_rgba(220,38,38,0.5)] ring-4 ring-[hsl(213_60%_15%)]">
                  {step.step}
                </span>
                <div className="pt-1.5">
                  <div className="mb-1.5 flex items-center gap-2 text-[#8ec5ff]">
                    <step.icon aria-hidden="true" className="size-5" />
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
