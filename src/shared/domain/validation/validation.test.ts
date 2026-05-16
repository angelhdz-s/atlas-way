import '@testing-library/jest-dom';
import { isKey, isKeyOf } from './validation.utils';

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

  static hello() {
    return 'hello';
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
});
