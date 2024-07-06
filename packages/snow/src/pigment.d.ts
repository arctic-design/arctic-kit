import type { ThemeArgs } from '@pigment-css/react/theme';
import { SnowTheme, SnowThemeArgs } from './core/theme.types';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs extends SnowThemeArgs {}
}

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?:
        | React.CSSProperties
        | ((theme: SnowTheme) => React.CSSProperties)
        | ReadonlyArray<
            React.CSSProperties | ((theme: SnowTheme) => React.CSSProperties)
          >;
    }
  }
}
