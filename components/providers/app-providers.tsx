'use client';

import { AccessibilityProvider } from '@/components/accessibility';
import { MotionProvider } from '@/components/providers/motion-provider';
import type { WithChildren } from '@/types';

/**
 * Ponto único de composição dos Client Providers da aplicação.
 * Mantém o `app/layout.tsx` como Server Component enxuto.
 */
export function AppProviders({ children }: WithChildren) {
  return (
    <AccessibilityProvider>
      <MotionProvider>{children}</MotionProvider>
    </AccessibilityProvider>
  );
}
