'use client';

import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { WithChildren } from '@/types';
import {
  ACCESSIBILITY_STORAGE_KEY,
  DEFAULT_ACCESSIBILITY_STATE,
  type AccessibilityContextValue,
  type ColorBlindMode,
  type FontScale,
  type LineHeightScale,
} from '@/types/accessibility';

/**
 * Provider de Acessibilidade — ARQUITETURA.
 *
 * Já implementa persistência (LocalStorage) e a aplicação das preferências no
 * <html>. A UI da Toolbar (botões +A/-A, alto contraste, daltonismo, etc.)
 * será construída em fase futura consumindo `useAccessibility()`.
 */

const FONT_SCALES: FontScale[] = [0.875, 1, 1.125, 1.25, 1.5];

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

export function AccessibilityProvider({ children }: WithChildren) {
  const [state, setState] = useLocalStorage(
    ACCESSIBILITY_STORAGE_KEY,
    DEFAULT_ACCESSIBILITY_STATE
  );

  // Reflete o estado no elemento <html> para os hooks de CSS agirem.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--a11y-font-scale', String(state.fontScale));
    root.style.setProperty('--a11y-line-height-scale', String(state.lineHeightScale));
    root.dataset.contrast = state.highContrast ? 'high' : '';
    root.dataset.reduceMotion = state.reduceMotion ? 'true' : '';
    root.dataset.colorblind = state.colorBlindMode;
  }, [state]);

  const increaseFont = useCallback(() => {
    setState((prev) => {
      const idx = FONT_SCALES.indexOf(prev.fontScale);
      const next = FONT_SCALES[Math.min(idx + 1, FONT_SCALES.length - 1)];
      return { ...prev, fontScale: next ?? prev.fontScale };
    });
  }, [setState]);

  const decreaseFont = useCallback(() => {
    setState((prev) => {
      const idx = FONT_SCALES.indexOf(prev.fontScale);
      const next = FONT_SCALES[Math.max(idx - 1, 0)];
      return { ...prev, fontScale: next ?? prev.fontScale };
    });
  }, [setState]);

  const setLineHeight = useCallback(
    (scale: LineHeightScale) => setState((prev) => ({ ...prev, lineHeightScale: scale })),
    [setState]
  );

  const toggleHighContrast = useCallback(
    () => setState((prev) => ({ ...prev, highContrast: !prev.highContrast })),
    [setState]
  );

  const toggleReduceMotion = useCallback(
    () => setState((prev) => ({ ...prev, reduceMotion: !prev.reduceMotion })),
    [setState]
  );

  const setColorBlindMode = useCallback(
    (mode: ColorBlindMode) => setState((prev) => ({ ...prev, colorBlindMode: mode })),
    [setState]
  );

  const reset = useCallback(
    () => setState(DEFAULT_ACCESSIBILITY_STATE),
    [setState]
  );

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      ...state,
      increaseFont,
      decreaseFont,
      setLineHeight,
      toggleHighContrast,
      toggleReduceMotion,
      setColorBlindMode,
      reset,
    }),
    [
      state,
      increaseFont,
      decreaseFont,
      setLineHeight,
      toggleHighContrast,
      toggleReduceMotion,
      setColorBlindMode,
      reset,
    ]
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

/** Hook de consumo do contexto de acessibilidade. */
export function useAccessibility(): AccessibilityContextValue {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error(
      'useAccessibility deve ser usado dentro de <AccessibilityProvider>.'
    );
  }
  return ctx;
}
