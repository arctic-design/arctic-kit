import { ThemeSize } from './types';

export const DEFAULT_ELEVATION_SCALE = 1.01;

export const ELEVATION_STYLE = {
  scale: DEFAULT_ELEVATION_SCALE,
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
};

// Snow font-size in px based on size
export const SnowFontSizes = {
  [ThemeSize.small]: 12,
  [ThemeSize.medium]: 14,
  [ThemeSize.large]: 16,
};

// Snow heights in px based on size
export const SnowHeights: { [key: string]: number } = {
  [ThemeSize.small]: 24,
  [ThemeSize.medium]: 32,
  [ThemeSize.large]: 40,
};

//Text Padding in px based on size
export const SnowTextPadding: { [key: string]: number } = {
  [ThemeSize.small]: 6,
  [ThemeSize.medium]: 8,
  [ThemeSize.large]: 12,
};

// Multiplier to spacing values based on size
export const SnowSpacingMap: { [key: string]: number } = {
  [ThemeSize.small]: 0.5,
  [ThemeSize.medium]: 1,
  [ThemeSize.large]: 1.5,
};
export const KeyboardEventKey = {
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  Space: ' ',
};

export const ZIndex = {
  SnackBar: 1400,
  Modal: 100,
  Drawer: 1000,
  Select: 1001,
  Tooltip: 2,
};
