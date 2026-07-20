import { Container } from '@/components/common';
import { SITE_CONFIG } from '@/constants/site';

/**
 * Placeholder da FASE 1.
 *
 * Esta página existe apenas para validar a fundação (fontes, tokens, tema,
 * providers e acessibilidade). As seções reais da landing page — Hero, Cards,
 * FAQ, Formulário, etc. — serão construídas na FASE 2 e substituirão este
 * conteúdo.
 */
export default function HomePage() {
  return (
    <Container as="section" className="flex min-h-dvh flex-col justify-center py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        {SITE_CONFIG.name}
      </p>
      <h1 className="max-w-prose text-4xl md:text-5xl">
        Fundação do projeto pronta.
      </h1>
      <p className="mt-4 max-w-prose text-lg text-muted-foreground">
        {SITE_CONFIG.product} — a estrutura, o Design System, a arquitetura de
        acessibilidade, SEO e animações estão configurados. As seções da landing
        page serão construídas na próxima fase.
      </p>
    </Container>
  );
}
