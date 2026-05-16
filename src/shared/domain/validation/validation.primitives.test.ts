import '@testing-library/jest-dom';
import { isBoolean, isIntegerNumber, isNumber, isString, isSymbol } from './validation.primitives';

describe('Primitives Utilities', () => {
  describe('isString', () => {
    const validate = isString;
    describe('True', () => {
      it('Should return true when non-empty string', () => {
        const value = 'hello';
        expect(validate(value)).toBe(true);
      });
      it('Should return true when empty string', () => {
        const value = '';
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when boolean', () => {
        const value = true as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when number', () => {
        const value = 4 as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when symbol', () => {
        const value = Symbol('Hello') as never;
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

  describe('isNumber', () => {
    const validate = isNumber;
    describe('True', () => {
      it('Should return true when integer number', () => {
        const value = 5;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when float number', () => {
        const value = 1.2;
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
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when symbol', () => {
        const value = Symbol('Hello') as never;
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

  describe('isIntegerNumber', () => {
    const validate = isIntegerNumber;
    describe('True', () => {
      it('Should return true positive', () => {
        const value = 5;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when 0', () => {
        const value = 0;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when negative', () => {
        const value = -1;
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
      it('Should return false when symbol', () => {
        const value = Symbol('5');
        expect(validate(value)).toBe(false);
      });
      it('Should return false when decimal number', () => {
        const value = 5.5 as never;
        expect(validate(value)).toBe(false);
      });
      it('Should return false when BigInt', () => {
        const value = 4543123547n as never;
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

  describe('isBoolean', () => {
    const validate = isBoolean;
    describe('True', () => {
      it('Should return true when true', () => {
        const value = true;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when false', () => {
        const value = false;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when string', () => {
        const value = 'hello' as never;
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
        const value = Symbol('Hello') as never;
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

  describe('isSymbol', () => {
    const validate = isSymbol;
    describe('True', () => {
      it('Should return true when string symbol', () => {
        const value = Symbol('5');
        expect(validate(value)).toBe(true);
      });
      it('Should return true when number symbol', () => {
        const value = Symbol(2);
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
      it('Should return false when array', () => {
        const value = [] as never;
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
});
