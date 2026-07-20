import Link from 'next/link';
import { Container } from '@/components/common';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <Container
      as="section"
      className="flex min-h-dvh flex-col items-start justify-center py-24"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        Erro 404
      </p>
      <h1 className="text-4xl md:text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-prose text-lg text-muted-foreground">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Button asChild variant="primary" size="lg" className="mt-8">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </Container>
  );
}
