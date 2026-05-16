import { isBoolean, isNumber, isString, isSymbol } from './validation.primitives';
import { isKey } from './validation.utils';

type ValidatorsTypes = {
  string: string;
  boolean: boolean;
  number: number;
  integer: number;
  symbol: symbol;
  date: Date;
  array: Array<any>;
  plainObject: object;
  key: symbol | number | string;
};

export const typeValidators: Record<keyof ValidatorsTypes, (value: unknown) => boolean> = {
  string: isString,
  boolean: isBoolean,
  number: isNumber,
  integer: isNumber,
  symbol: isSymbol,
  date: isDate,
  array: isArray,
  plainObject: isObject,
  key: isKey,
} as const;

export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is object {
  return value?.constructor === Object;
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}
