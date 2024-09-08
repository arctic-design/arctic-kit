import { createTheme } from './createTheme';
import { green } from '@arctic-kit/colors';
import { SnowColorTheme } from '../core/theme.types';
import { DEFAULT_THEME } from './theme';

describe('createTheme', () => {
  it('should return a theme object with the provided options', () => {
    const options: SnowColorTheme = {
      colors: {
        primary: {
          ...green,
          main: green[100],
        },
        secondary: {
          ...green,
          main: green[200],
        },
        success: {
          ...green,
          main: green[300],
        },
        info: {
          ...green,
          main: green[400],
        },
        warning: {
          ...green,
          main: green[500],
        },
        error: {
          ...green,
          main: green[600],
        },
        neutral: {
          0: '#000000',
          1000: '#FFFFFF',
        },
        grey: {
          ...green,
          main: green[700],
        },
        white: '#fff',
        black: '#000',
      },
    };

    const theme = createTheme(options);

    expect(theme.colors.primary.main).toBe(green[100]);
    expect(theme.colors.secondary.main).toBe(green[200]);
    expect(theme.colors.success.main).toBe(green[300]);
  });

  it('should return a theme object with default values if no options are provided', () => {
    const theme = createTheme();

    expect(theme.colors.primary.main).toBe(DEFAULT_THEME.colors.primary.main);
    expect(theme.colors.success.main).toBe(DEFAULT_THEME.colors.success.main);
  });
});
