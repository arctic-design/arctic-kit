import { toHumanReadable, capitalizeFirstLetter } from './utility';

describe('toHumanReadable', () => {
  it('should convert camel case string to human readable format', () => {
    expect(toHumanReadable('lastUpdated')).toBe('Last Updated');
  });

  it('should convert snake case string to human readable format', () => {
    expect(toHumanReadable('last_updated')).toBe('Last Updated');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('should not change the word if the first letter is already capitalized', () => {
    expect(capitalizeFirstLetter('World')).toBe('World');
  });
});
