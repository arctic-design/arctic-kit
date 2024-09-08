import { SnowTheme } from '../core';
import { DEFAULT_DARK_THEME, DEFAULT_THEME } from './theme';

export const createDefaultTheme = (darkScheme?: boolean): SnowTheme => {
  return darkScheme ? DEFAULT_DARK_THEME : DEFAULT_THEME;
};
