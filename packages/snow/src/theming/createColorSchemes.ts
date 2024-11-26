import { SnowTheme } from '../core';
import { createDefaultTheme } from './createDefaultTheme';

export const createColorSchemes = (
  lightTheme?: SnowTheme,
  darkTheme?: SnowTheme
) => {
  const light = lightTheme || createDefaultTheme();
  const dark = darkTheme || createDefaultTheme(true);
  return {
    colorSchemes: {
      light,
      dark,
    },
    cssVarPrefix: 'snow',
    getSelector: (colorScheme?: string) =>
      colorScheme ? `.theme-${colorScheme}` : ':root',
  };
};
