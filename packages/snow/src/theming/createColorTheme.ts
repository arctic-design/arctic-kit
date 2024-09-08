import { SnowColorTheme, SnowColorThemeCustom } from '../core/theme.types';
import { deepmerge } from './deepmerge';
import { DEFAULT_DARK_THEME, DEFAULT_THEME } from './theme';

export const createColorTheme = (
  options?: SnowColorThemeCustom,
  darkScheme?: boolean
): SnowColorTheme => {
  const { colors } = darkScheme ? DEFAULT_DARK_THEME : DEFAULT_THEME;
  if (!options) {
    return { colors };
  }
  return deepmerge({ colors }, { ...options });
};
