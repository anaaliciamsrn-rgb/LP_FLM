/**
 * Contratos de tipo da Toolbar de Acessibilidade.
 *
 * A UI da toolbar NÃO é implementada nesta fase — aqui definimos apenas o
 * formato do estado e das ações, para que Provider, hook e componentes
 * compartilhem a mesma tipagem quando forem construídos.
 */

/** Tipos de daltonismo suportados pelos filtros SVG. */
export type ColorBlindMode =
  | 'none'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia';

/** Multiplicador de escala tipográfica (100% = padrão). */
export type FontScale = 0.875 | 1 | 1.125 | 1.25 | 1.5;

/** Multiplicador de espaçamento entre linhas. */
export type LineHeightScale = 1 | 1.25 | 1.5 | 1.75;

/** Estado completo persistido em LocalStorage. */
export interface AccessibilityState {
  fontScale: FontScale;
  lineHeightScale: LineHeightScale;
  highContrast: boolean;
  reduceMotion: boolean;
  colorBlindMode: ColorBlindMode;
}

/** Ações expostas pelo contexto de acessibilidade. */
export interface AccessibilityActions {
  increaseFont: () => void;
  decreaseFont: () => void;
  setLineHeight: (scale: LineHeightScale) => void;
  toggleHighContrast: () => void;
  toggleReduceMotion: () => void;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  reset: () => void;
}

export type AccessibilityContextValue = AccessibilityState & AccessibilityActions;

/** Valores iniciais / padrão. */
export const DEFAULT_ACCESSIBILITY_STATE: AccessibilityState = {
  fontScale: 1,
  lineHeightScale: 1,
  highContrast: false,
  reduceMotion: false,
  colorBlindMode: 'none',
};

/** Chave única usada no LocalStorage. */
export const ACCESSIBILITY_STORAGE_KEY = 'flm-accessibility-preferences';
