/**
 * Estrutura de navegação da landing page.
 * As seções serão criadas na FASE 2 — aqui definimos apenas o contrato
 * (âncoras) para header, menu mobile e links de "pular para".
 */
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

/** Alvo do link "Pular para o conteúdo" (acessibilidade / teclado). */
export const SKIP_LINK_TARGET_ID = 'conteudo-principal';
