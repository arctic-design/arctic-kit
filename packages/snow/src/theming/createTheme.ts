import { SnowThemeOptionalParams } from '../core/theme.types';
import { deepmerge } from './deepmerge';
import { DEFAULT_DARK_THEME, DEFAULT_THEME } from './theme';

export const createTheme = (
  options?: SnowThemeOptionalParams,
  darkScheme?: boolean
) => {
  const currentTheme = darkScheme ? DEFAULT_DARK_THEME : DEFAULT_THEME;
  if (!options) {
    return currentTheme;
  }
  return deepmerge(currentTheme, { ...options });
};
