import type { ExtendTheme } from '@pigment-css/react/theme';

export type ColorType = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type NeutralColorType = {
  0: string;
  1000: string;
};

export interface DefaultTokenTypeVariant {
  main: string;
}

export interface BorderRadiusType {
  50: string;
  100: string;
  200: string;
}
export interface BorderWidthType {
  100: string;
  200: string;
  300: string;
}

export interface ShadowType {
  0: string;
  50: string;
  100: string;
  200: string;
}

export interface SpacingType {
  0: number;
  25: number;
  50: number;
  100: number;
  200: number;
  300: number;
  400: number;
  500: number;
  600: number;
  700: number;
  800: number;
  900: number;
}

export interface SnowColorType extends ColorType, DefaultTokenTypeVariant {}

export interface SnowColorTheme {
  colors: {
    primary: SnowColorType;
    secondary: SnowColorType;
    success: SnowColorType;
    info: SnowColorType;
    warning: SnowColorType;
    error: ColorType & DefaultTokenTypeVariant;
    neutral: NeutralColorType;
    grey: SnowColorType;
    white: string;
    black: string;
  };
}

export type SnowColorThemeCustom = {
  colors: {
    primary?: SnowColorType;
    secondary?: SnowColorType;
    success?: SnowColorType;
    info?: SnowColorType;
    warning?: SnowColorType;
    error?: ColorType & DefaultTokenTypeVariant;
    neutral?: NeutralColorType;
    grey?: SnowColorType;
    white?: string;
    black?: string;
  };
};

export interface SnowFont {
  family: {
    base: string;
  };
  weight: {
    regular: number | string;
    medium: number | string;
    semibold: number | string;
    bold: number | string;
  };
  size: {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };
}

export interface SnowBorder {
  radius: BorderRadiusType & DefaultTokenTypeVariant;
  width: BorderWidthType & DefaultTokenTypeVariant;
}

export interface SnowLineHeight {
  100: number;
  200: number;
  300: number;
}

export interface SnowSpacings extends SpacingType {
  main: number;
}
export interface SnowTheme extends SnowColorTheme {
  spacing: number;
  spacings: SnowSpacings;
  shadow: ShadowType & DefaultTokenTypeVariant;
  border: SnowBorder;
  font: SnowFont;
  lineHeight: SnowLineHeight;
  // getContrastText: (background: string) => string;
}

export interface SnowThemeOptionalParams extends SnowColorThemeCustom {
  spacing?: number;
  spacings?: SnowSpacings;
  shadow?: ShadowType & DefaultTokenTypeVariant;
  border?: SnowBorder;
  font?: SnowFont;
  lineHeight?: SnowLineHeight;
}

export interface SnowThemeArgs {
  theme: ExtendTheme<{
    colorScheme: 'light' | 'dark';
    tokens: SnowTheme;
  }>;
}
