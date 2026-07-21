import { SKIP_LINK_TARGET_ID } from '@/constants/navigation';

/**
 * Link de salto para o conteúdo principal. Fica visualmente oculto até
 * receber foco por teclado (Tab), quando aparece no canto superior esquerdo.
 * Requisito de navegação por teclado (WCAG 2.2 — 2.4.1).
 */
export function SkipLink() {
  return (
    <a href={`#${SKIP_LINK_TARGET_ID}`} className="skip-link">
      Pular para o conteúdo principal
    </a>
  );
}
