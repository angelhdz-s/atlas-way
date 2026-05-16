import '@testing-library/jest-dom';
import { isArray, isDate, isObject } from './validation.non-primitives';

describe('Non-Primitives Utilities', () => {
  describe('isArray', () => {
    const validate = isArray;
    describe('True', () => {
      it('Should return true when non-empty array', () => {
        const value = [1, 2, 3, 4];
        expect(validate(value)).toBe(true);
      });
      it('Should return true when empty array', () => {
        const value = [] as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when string', () => {
        const value = 'hello' as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when boolean', () => {
        const value = true as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when number', () => {
        const value = 5 as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when symbol', () => {
        const value = Symbol(4) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when plain object', () => {
        const value = {} as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when Date', () => {
        const value = new Date() as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when function', () => {
        const value = (() => {}) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when Regex', () => {
        const value = /^[a-zA-Z0-9._%+-]$/ as never;
        expect(validate(value)).toBe(false);
      });
    });
  });

  describe('isObject (plain)', () => {
    const validate = isObject;
    describe('True', () => {
      it('Should return true when non-empty array', () => {
        const value = { age: 30 } as never;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when empty array', () => {
        const value = {} as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when string', () => {
        const value = 'hello' as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when boolean', () => {
        const value = true as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when number', () => {
        const value = 5 as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when symbol', () => {
        const value = Symbol(4) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when array', () => {
        const value = [] as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when Date', () => {
        const value = new Date() as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when function', () => {
        const value = (() => {}) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when Regex', () => {
        const value = /^[a-zA-Z0-9._%+-]$/ as never;
        expect(validate(value)).toBe(false);
      });
    });
  });

  describe('isDate', () => {
    const validate = isDate;
    describe('True', () => {
      it('Should return true when new Date', () => {
        const value = new Date() as never;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when certain Date', () => {
        const value = new Date('2026-15-05') as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when string', () => {
        const value = 'hello' as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when boolean', () => {
        const value = true as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when number', () => {
        const value = 5 as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when symbol', () => {
        const value = Symbol(4) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when array', () => {
        const value = [] as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when plain object', () => {
        const value = {} as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when function', () => {
        const value = (() => {}) as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when Regex', () => {
        const value = /^[a-zA-Z0-9._%+-]$/ as never;
        expect(validate(value)).toBe(false);
      });
    });
  });
});
