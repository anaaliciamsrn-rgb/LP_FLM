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

/**
 * Itens da navbar espelhando o site oficial do Grupo FLM.
 * Apontam para o site institucional, já que esta landing page será
 * integrada a ele. `external` controla target/rel no link.
 */
export const OFFICIAL_NAV_ITEMS: (NavItem & { external?: boolean })[] = [
  { label: 'Início', href: 'https://www.grupoflm.com.br/', external: true },
  { label: 'Sobre', href: 'https://www.grupoflm.com.br/sobre/', external: true },
  {
    label: 'Consultoria',
    href: 'https://www.grupoflm.com.br/consultoria/',
    external: true,
  },
  {
    label: 'Proteção Familiar',
    href: 'https://www.grupoflm.com.br/lp/mapa-protecao/',
    external: true,
  },
  { label: 'Contato', href: 'https://www.grupoflm.com.br/contato/', external: true },
];

/** Alvo do link "Pular para o conteúdo" (acessibilidade / teclado). */
export const SKIP_LINK_TARGET_ID = 'conteudo-principal';
