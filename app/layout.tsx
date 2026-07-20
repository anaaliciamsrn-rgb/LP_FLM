import type { Metadata, Viewport } from 'next';
import { fontVariables } from '@/lib/fonts';
import { buildMetadata, buildOrganizationJsonLd } from '@/lib/seo';
import { SITE_CONFIG } from '@/constants/site';
import { SKIP_LINK_TARGET_ID } from '@/constants/navigation';
import { AppProviders } from '@/components/providers';
import { ColorBlindFilters, SkipLink } from '@/components/accessibility';
import { cn } from '@/lib/utils';
import './globals.css';

// Metadata base da aplicação (herdada e sobrescrevível por rota).
export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: SITE_CONFIG.themeColor },
  ],
  width: 'device-width',
  initialScale: 1,
  // Nunca bloquear zoom — requisito de acessibilidade (WCAG 1.4.4).
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(fontVariables, 'min-h-dvh')}>
        {/* Structured data (schema.org) para SEO. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <AppProviders>
          <SkipLink />
          <ColorBlindFilters />

          {/* Alvo do skip-link; as seções da landing entram aqui na FASE 2. */}
          <main id={SKIP_LINK_TARGET_ID}>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
