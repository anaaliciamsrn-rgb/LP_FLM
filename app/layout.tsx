import type { Metadata, Viewport } from 'next';
import { fontVariables } from '@/lib/fonts';
import {
  buildLocalBusinessJsonLd,
  buildMetadata,
  buildOrganizationJsonLd,
} from '@/lib/seo';
import { SITE_CONFIG } from '@/constants/site';
import { SKIP_LINK_TARGET_ID } from '@/constants/navigation';
import { AppProviders } from '@/components/providers';
import {
  AccessibilityToolbar,
  ColorBlindFilters,
  SkipLink,
} from '@/components/accessibility';
import { Navbar, Footer } from '@/components/layout';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: SITE_CONFIG.themeColor },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [buildOrganizationJsonLd(), buildLocalBusinessJsonLd()];

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(fontVariables, 'min-h-dvh overflow-x-hidden')}>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <AppProviders>
          <SkipLink />
          <ColorBlindFilters />
          <Navbar />

          <main id={SKIP_LINK_TARGET_ID}>{children}</main>

          <Footer />
          <AccessibilityToolbar />
        </AppProviders>
      </body>
    </html>
  );
}
