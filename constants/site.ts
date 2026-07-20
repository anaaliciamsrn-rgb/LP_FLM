/**
 * Fonte única de verdade para dados do site.
 * Alterar aqui reflete em SEO, metadata, schema.org e componentes.
 */
export const SITE_CONFIG = {
  name: 'Grupo FLM',
  product: 'Plano de Saúde para Terceira Idade',
  shortName: 'FLM Saúde Sênior',
  description:
    'Plano de saúde pensado para quem tem mais de 50 anos: atendimento humano, cobertura completa e tranquilidade para você e sua família.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.grupoflm.com.br').replace(
    /\/$/,
    ''
  ),
  locale: 'pt_BR',
  themeColor: '#0f2a4a',
  ogImage: '/images/og-image.jpg',
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
  },
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
