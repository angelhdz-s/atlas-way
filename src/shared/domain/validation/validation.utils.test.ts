import '@testing-library/jest-dom';
import { isKey, isKeyOf, isArrayOf, isValidEmail, isValidUuid } from './validation.utils';

type PersonProps = {
  readonly name: string;
  age: number;
};

class Person {
  constructor(readonly props: PersonProps) {}

  get name() {
    return this.props.name;
  }

  set age(age: number) {
    this.age = age;
  }

  message() {
    return `Hello I am ${this.props.name} and I'm ${this.props.age}`;
  }
}

describe('Special Utilities', () => {
  describe('isKey', () => {
    const validate = isKey;
    describe('True', () => {
      it('Should return true when string', () => {
        const value = 'hello' as never;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when symbol', () => {
        const value = Symbol('hello') as never;
        expect(validate(value)).toBe(true);
      });
      it('Should return true when number', () => {
        const value = 5 as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when booean', () => {
        const value = true as never;
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

  describe('isKeyOf', () => {
    const validate = isKeyOf;
    const person = new Person({ name: 'Name', age: 30 });
    describe('True', () => {
      it('Should return true when number key in plain objects', () => {
        const key = 1 as never;
        const container = { 1: 'number' } as never;
        expect(validate(key, container)).toBe(true);
      });
      it('Should return true when string key in plain objects', () => {
        const key = 'name' as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(true);
      });
      it('Should return true when getter key in instance', () => {
        const key = 'name' as never;
        expect(validate(key, person)).toBe(true);
      });
      it('Should return true when setter key in instance', () => {
        const key = 'age' as never;
        expect(validate(key, person)).toBe(true);
      });
      it('Should return true when method key in instance', () => {
        const key = 'message' as never;
        expect(validate(key, person)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when not existing key', () => {
        const key = 'ame' as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when key is not a valid key', () => {
        const key = new Date() as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when not a valid objects', () => {
        const key = 'name' as never;
        const container = null as never;
        expect(validate(key, container)).toBe(false);
      });
    });
  });

  describe('isKeyOf', () => {
    const validate = isKeyOf;
    const person = new Person({ name: 'Name', age: 30 });
    describe('True', () => {
      it('Should return true when number key in plain objects', () => {
        const key = 1 as never;
        const container = { 1: 'number' } as never;
        expect(validate(key, container)).toBe(true);
      });
      it('Should return true when string key in plain objects', () => {
        const key = 'name' as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(true);
      });
      it('Should return true when getter key in instance', () => {
        const key = 'name' as never;
        expect(validate(key, person)).toBe(true);
      });
      it('Should return true when setter key in instance', () => {
        const key = 'age' as never;
        expect(validate(key, person)).toBe(true);
      });
      it('Should return true when method key in instance', () => {
        const key = 'message' as never;
        expect(validate(key, person)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when invalid key', () => {
        const key = { a: '' } as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when invalid object', () => {
        const key = { a: '' } as never;
        const container = 'string' as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when not existing key', () => {
        const key = 'ame' as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when key is not a valid key', () => {
        const key = new Date() as never;
        const container = { name: 'Name' } as never;
        expect(validate(key, container)).toBe(false);
      });

      it('Should return false when not a valid objects', () => {
        const key = 'name' as never;
        const container = null as never;
        expect(validate(key, container)).toBe(false);
      });
    });
  });

  describe('isArrayOf', () => {
    const validate = isArrayOf;
    describe('True', () => {
      it('Should return true when string array', () => {
        const array = ['a', 'b', 'c'] as never;
        expect(validate(array, 'string')).toBe(true);
      });
      it('Should return true when number array', () => {
        const array = [1, 2.5, 3] as never;
        expect(validate(array, 'number')).toBe(true);
      });
      it('Should return true when method key in instance', () => {
        const array = [1, 2, 3] as never;
        expect(validate(array, 'integer')).toBe(true);
      });
      it('Should return true when boolean array', () => {
        const array = [true, false] as never;
        expect(validate(array, 'boolean')).toBe(true);
      });
      it('Should return true when symbol array', () => {
        const array = [Symbol('a'), Symbol('b')] as never;
        expect(validate(array, 'symbol')).toBe(true);
      });
      it('Should return true when plain object array', () => {
        const array = [{ a: '' }, { b: '' }] as never;
        expect(validate(array, 'plainObject')).toBe(true);
      });
      it('Should return true when array of arrays', () => {
        const array = [[], [], []] as never;
        expect(validate(array, 'array')).toBe(true);
      });
      it('Should return true when Date array', () => {
        const array = [new Date(), new Date()] as never;
        expect(validate(array, 'date')).toBe(true);
      });
      it('Should return true when array of keys', () => {
        const array = ['name', 5, Symbol('key')] as never;
        expect(validate(array, 'key')).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when not array', () => {
        const array = null as never;
        expect(validate(array, 'string')).toBe(false);
      });
      it('Should return false when not string array', () => {
        const array = ['a', 1, 'b', 'c'] as never;
        expect(validate(array, 'string')).toBe(false);
      });
      it('Should return false when not number array', () => {
        const array = [1, 2.5, 3, '4'] as never;
        expect(validate(array, 'number')).toBe(false);
      });
      it('Should return false when not method key in instance', () => {
        const array = [1, 2, 3, 4.5] as never;
        expect(validate(array, 'integer')).toBe(false);
      });
      it('Should return false when not boolean array', () => {
        const array = [false, false, 'true'] as never;
        expect(validate(array, 'boolean')).toBe(false);
      });
      it('Should return false when not symbol array', () => {
        const array = [Symbol('a'), Symbol('b'), 'c'] as never;
        expect(validate(array, 'symbol')).toBe(false);
      });
      it('Should return false when not plain object array', () => {
        const array = [{ a: '' }, { b: '' }, [], null] as never;
        expect(validate(array, 'plainObject')).toBe(false);
      });
      it('Should return false when not array of arrays', () => {
        const array = [[], [], [], {}] as never;
        expect(validate(array, 'array')).toBe(false);
      });
      it('Should return false when not Date array', () => {
        const array = [new Date(), new Date(), {}, []] as never;
        expect(validate(array, 'date')).toBe(false);
      });
      it('Should return false when not array of keys', () => {
        const array = ['name', 5, Symbol('key'), 5.5, true] as never;
        expect(validate(array, 'key')).toBe(false);
      });
    });
  });

  describe('isValidEmail', () => {
    const validate = isValidEmail;
    describe('True', () => {
      it('Should return true when valid format', () => {
        const value = 'email@gmail.com' as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when invalid format', () => {
        const value = 'email$/@gmail.com' as never;
        expect(validate(value)).toBe(false);
      });

      it('Should return false when invalid type', () => {
        const value = null as never;
        expect(validate(value)).toBe(false);
      });
    });
  });

  describe('isValidEmail', () => {
    const validate = isValidUuid;
    describe('True', () => {
      it('Should return true when valid format', () => {
        const value = '1df38173-6fae-4abb-8cb2-ce33b6c24da4' as never;
        expect(validate(value)).toBe(true);
      });
    });

    describe('False', () => {
      it('Should return false when invalid format', () => {
        const value = '1dfx81d3-6fae-4abb-8cB2-ce33b6cEWda4' as never;
        expect(validate(value)).toBe(false);
      });

      it('Should return false when invalid type', () => {
        const value = null as never;
        expect(validate(value)).toBe(false);
      });
    });
  });
});
