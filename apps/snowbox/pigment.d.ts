import { SnowThemeArgs } from '@arctic-kit/snow';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs extends SnowThemeArgs {}
}
