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
  officialUrl: 'https://www.grupoflm.com.br',
  locale: 'pt_BR',
  themeColor: '#0f2a4a',
  ogImage: '/images/og-image.jpg',
  contact: {
    phone: '+5511981677980',
    phoneDisplay: '(11) 98167-7980',
    whatsapp: 'https://wa.me/5511981677980',
    whatsappMessage:
      'Olá Grupo FLM! Gostaria de informações sobre o plano de saúde para terceira idade.',
    email: 'comercial@grupoflm.com.br',
  },
  social: {
    instagram: 'https://www.instagram.com/grupoflm/',
    linkedin: 'https://www.linkedin.com/company/10398067',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/** Monta o link de WhatsApp já com a mensagem padrão codificada. */
export function getWhatsappUrl(message: string = SITE_CONFIG.contact.whatsappMessage) {
  return `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
