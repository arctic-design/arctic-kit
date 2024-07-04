import { getContrastRatio, getContrastText } from './colorUtils';

describe('getContrastRatio', () => {
  it('should return the correct contrast ratio between two colors', () => {
    const ratio = getContrastRatio('#000000', '#FFFFFF');
    expect(ratio).toBe(21);
  });

  it('should return 1 when the colors are the same', () => {
    const ratio = getContrastRatio('#000000', '#000000');
    expect(ratio).toBe(1);
  });

  // Add more test cases for different color combinations
});

describe('getContrastText', () => {
  it('should return "black" for a light background color', () => {
    const text = getContrastText('#FFFFFF');
    expect(text).toBe('#000000');
  });

  it('should return "white" for a dark background color', () => {
    const text = getContrastText('#000000');
    expect(text).toBe('#ffffff');
  });
});
