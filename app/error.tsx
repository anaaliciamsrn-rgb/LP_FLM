'use client';

import { useEffect } from 'react';
import { Container } from '@/components/common';
import { Button } from '@/components/ui';

/**
 * Error boundary da rota. Mensagem clara e acionável, no tom da interface
 * (nunca pede desculpas nem culpa o usuário) — orientação de UX writing.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Em produção, envie para seu serviço de observabilidade aqui.
    console.error(error);
  }, [error]);

  return (
    <Container
      as="section"
      className="flex min-h-dvh flex-col items-start justify-center py-24"
    >
      <h1 className="text-4xl md:text-5xl">Algo não carregou como esperado</h1>
      <p className="mt-4 max-w-prose text-lg text-muted-foreground">
        Tente novamente. Se o problema continuar, atualize a página em instantes.
      </p>
      <Button onClick={reset} variant="primary" size="lg" className="mt-8">
        Tentar novamente
      </Button>
    </Container>
  );
}
