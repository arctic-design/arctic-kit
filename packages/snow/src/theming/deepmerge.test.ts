import { deepmerge, isPlainObject, DeepmergeOptions } from './deepmerge';

describe('deepmerge', () => {
  it('should merge two plain objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };

    const result = deepmerge(target, source);

    expect(result).toEqual(expected);
  });

  it('should clone the source object when clone option is true', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const options: DeepmergeOptions = { clone: true };

    const result = deepmerge(target, source, options);

    expect(result).not.toBe(source);
  });

  it('should not clone the source object when clone option is false', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const options: DeepmergeOptions = { clone: false };

    const result = deepmerge(target, source, options);

    expect(result).toBe(target);
  });
});

describe('isPlainObject', () => {
  it('should return true for a plain object', () => {
    const obj = { a: 1, b: 2 };

    const result = isPlainObject(obj);

    expect(result).toBe(true);
  });

  it('should return false for a non-plain object', () => {
    const arr = [1, 2, 3];

    const result = isPlainObject(arr);

    expect(result).toBe(false);
  });
});
