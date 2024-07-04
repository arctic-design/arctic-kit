import { SnowColorTheme, SnowColorThemeCustom } from '../core/theme.types';
import { deepmerge } from './deepmerge';
import { DEFAULT_THEME } from './theme';

export const createColorTheme = (
  options?: SnowColorThemeCustom
): SnowColorTheme => {
  const { colors } = DEFAULT_THEME;
  if (!options) {
    return { colors };
  }
  return deepmerge({ colors }, { ...options });
};
