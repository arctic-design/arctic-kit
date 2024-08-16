import { green } from '@arctic-kit/colors';
import { DEFAULT_THEME } from './theme';
import { SnowColorThemeCustom } from '../core/theme.types';
import { createColorTheme } from './createColorTheme';

describe('createColorTheme', () => {
  it('should return a color theme object with the provided options', () => {
    const options: SnowColorThemeCustom = {
      colors: {
        primary: { ...green, main: green[100] },
      },
    };

    const colorTheme = createColorTheme(options);

    expect(colorTheme.colors.primary.main).toBe(green[100]);
    expect(colorTheme.colors.info.main).toBe(DEFAULT_THEME.colors.info.main);
    expect(colorTheme.colors.success.main).toBe(
      DEFAULT_THEME.colors.success.main
    );
  });

  it('should return a color theme object with default values if no options are provided', () => {
    const colorTheme = createColorTheme();

    expect(colorTheme.colors.primary.main).toBe(
      DEFAULT_THEME.colors.primary.main
    );
    expect(colorTheme.colors.success.main).toBe(
      DEFAULT_THEME.colors.success.main
    );
    expect(colorTheme.colors.info.main).toBe(DEFAULT_THEME.colors.info.main);
  });
});
