import type { ColorType } from '@arctic-kit/colors';
import { DefaultTokenTypeVariant } from '../core';

export const contrastThreshold = 3;

// Convert hex color to RGB array
function hexToRgb(hex: string): number[] | null {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  } else {
    return null;
  }

  return [r, g, b];
}

// Utility to convert RGB to hex
export const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

// Adjust color brightness
export const adjustBrightness = (color: string, amount: number): string => {
  const rgbColor = hexToRgb(color);
  if (!rgbColor) {
    throw new Error('Invalid color format');
  }
  // Calculate adjustment
  const adjust = (color: number) => Math.max(Math.min(255, color + amount), 0);
  return rgbToHex(
    adjust(rgbColor[0]),
    adjust(rgbColor[1]),
    adjust(rgbColor[2])
  );
};

// Generate color shades
export const generateColorShades = (
  color: string
): ColorType & DefaultTokenTypeVariant => {
  // Assume the user passed color is for the 500 variant
  return {
    50: adjustBrightness(color, 200),
    100: adjustBrightness(color, 150),
    200: adjustBrightness(color, 100),
    300: adjustBrightness(color, 50),
    400: adjustBrightness(color, 25),
    500: color, // Original color
    600: adjustBrightness(color, -25),
    700: adjustBrightness(color, -50),
    800: adjustBrightness(color, -100),
    900: adjustBrightness(color, -150),
    main: color,
  };
};

export function getContrastRatio(color1: string, color2: string): number {
  // Helper function to calculate relative luminance
  function getRelativeLuminance(color: number[]): number {
    const rgb = color.map((value) => {
      value /= 255; // Normalize to 0-1 range
      value =
        value <= 0.03928
          ? value / 12.92
          : Math.pow((value + 0.055) / 1.055, 2.4);
      return value;
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    throw new Error('Invalid color format');
  }

  const luminance1 = getRelativeLuminance(rgb1);
  const luminance2 = getRelativeLuminance(rgb2);

  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);

  return parseFloat(contrastRatio.toFixed(2));
}

export function getContrastText(background: string): string {
  const contrast = getContrastRatio('#ffffff', background);

  const contrastText = contrast >= contrastThreshold ? '#ffffff' : '#000000';

  if (process.env.NODE_ENV !== 'production') {
    if (contrast < 3) {
      console.error(
        [
          `The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n')
      );
    }
  }

  return contrastText;
}
