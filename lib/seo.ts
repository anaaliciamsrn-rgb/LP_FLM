import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';
import { absoluteUrl } from '@/lib/utils';

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Gera o objeto Metadata (App Router) com Open Graph, Twitter Cards,
 * canonical e robots já configurados. Cada página pode sobrescrever campos.
 */
export function buildMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '/',
  noIndex = false,
}: BuildMetadataArgs = {}): Metadata {
  const computedTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.product} | ${SITE_CONFIG.name}`;

  const canonical = absoluteUrl(path);

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: computedTitle,
    description,
    applicationName: SITE_CONFIG.name,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: canonical,
      siteName: SITE_CONFIG.name,
      title: computedTitle,
      description,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.product}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: computedTitle,
      description,
      images: [SITE_CONFIG.ogImage],
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

/**
 * JSON-LD (schema.org) descrevendo a organização e o serviço.
 * Injete o retorno em um <script type="application/ld+json"> no layout.
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    logo: absoluteUrl('/icons/logo.png'),
    areaServed: 'BR',
    ...(SITE_CONFIG.contact.phone
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.contact.phone,
            contactType: 'sales',
            availableLanguage: ['Portuguese'],
          },
        }
      : {}),
  } as const;
}
