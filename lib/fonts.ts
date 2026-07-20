import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

/**
 * Tipografia carregada com next/font — self-hosted automaticamente,
 * sem requisições de terceiros (bom para performance e privacidade),
 * com `display: swap` para evitar texto invisível durante o carregamento.
 */

// Texto corrido / UI.
export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

// Títulos / headings.
export const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
});

/** Classe utilitária que expõe ambas as variáveis de fonte no <html>. */
export const fontVariables = `${fontSans.variable} ${fontHeading.variable}`;
