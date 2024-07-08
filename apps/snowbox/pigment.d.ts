import { SnowThemeArgs } from '@arctic-kit/snow';

declare module '@pigment-css/react/theme' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface ThemeArgs extends SnowThemeArgs {}
}
