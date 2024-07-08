import { SnowTheme, SnowThemeArgs } from './core/theme.types';

declare module '@pigment-css/react/theme' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface ThemeArgs extends SnowThemeArgs {}
}

declare global {
  namespace React {
    interface HTMLAttributes {
      sx?:
        | React.CSSProperties
        | ((theme: SnowTheme) => React.CSSProperties)
        | ReadonlyArray<
            React.CSSProperties | ((theme: SnowTheme) => React.CSSProperties)
          >;
    }
  }
}
