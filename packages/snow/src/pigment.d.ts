import type { ExtendTheme } from '@pigment-css/react/theme';
import { SnowTheme } from './core/theme.types';

declare module '@pigment-css/react/theme' {
  interface ThemeTokens extends SnowTheme {}

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: 'light' | 'dark';
      tokens: ThemeTokens;
    }>;
  }
}
