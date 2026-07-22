import { Container, SectionHeading, Reveal } from '@/components/common';
import { STEPS_ITEMS } from '@/constants/content';

/**
 * Como funciona — timeline do processo.
 *
 * Seção institucional: fundo azul-marinho com grid extremamente discreto
 * (5–8% de opacidade), reforçando a identidade visual do Grupo FLM como uma
 * "pausa" entre as áreas brancas do site — sem competir com o conteúdo.
 *
 * Estrutura da timeline inalterada (mesma lógica de STEPS_ITEMS, Reveal e
 * layout horizontal/vertical); apenas a paleta foi adaptada para o fundo
 * escuro (texto branco, ícones azul-claro, número em vermelho institucional
 * como pequeno detalhe de destaque).
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
      {/* Grid quase imperceptível — mesma identidade da Hero, opacidade baixa. */}
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
          className="mx-auto mb-16"
        />

        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* Linha de conexão: vertical no mobile, horizontal no desktop. */}
          <span
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-white/15 lg:left-0 lg:top-8 lg:h-px lg:w-full"
          />
          {STEPS_ITEMS.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 0.1} className="relative">
              <div className="flex items-start gap-4 lg:flex-col lg:items-start">
                <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-danger font-heading text-lg font-bold text-danger-foreground shadow-[0_8px_20px_-6px_rgba(220,38,38,0.5)] ring-4 ring-[hsl(213_60%_15%)]">
                  {step.step}
                </span>
                <div className="lg:mt-5">
                  <div className="mb-1.5 hidden text-[#8ec5ff] lg:block">
                    <step.icon aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
