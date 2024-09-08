import { SnowTheme } from '../core/theme.types';

import default_theme from './default_theme.json';
import darkTheme from './dark_theme.json';

// done to avoid warnings from vite connfig of module resolution
export const DEFAULT_THEME: SnowTheme = default_theme;

export const DEFAULT_DARK_THEME: SnowTheme = darkTheme;
