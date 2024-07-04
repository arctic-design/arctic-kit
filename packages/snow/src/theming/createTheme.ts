import { SnowColorTheme } from '../core/theme.types';
import { deepmerge } from './deepmerge';
import { DEFAULT_THEME } from './theme';

export const createTheme = (options?: SnowColorTheme) => {
  if (!options) {
    return DEFAULT_THEME;
  }
  return deepmerge(DEFAULT_THEME, { ...options });
};
