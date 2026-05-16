import { REGEX_EMAIL, REGEX_UUID } from '@/shared/domain/validation/validation.constants';
import { isString, isBoolean, isIntegerNumber, isNumber, isSymbol } from './validation.primitives';
import { isArray, isDate, isObject } from './validation.non-primitives';

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
  integer: isIntegerNumber,
  symbol: isSymbol,
  date: isDate,
  array: isArray,
  plainObject: isObject,
  key: isKey,
} as const;

export function isArrayOf<T extends keyof ValidatorsTypes>(
  value: unknown,
  type: T
): value is Array<ValidatorsTypes[T]> {
  if (!isArray(value)) return false;
  for (const el of value) {
    const validate = typeValidators[type];
    if (!validate(el)) return false;
  }
  return Array.isArray(value);
}

export function isKey(value: unknown): value is symbol | number | string {
  return isIntegerNumber(value) || isString(value) || isSymbol(value);
}

export function isKeyOf<T>(key: unknown, obj: T): key is keyof T {
  if (obj === null) return false;
  if (typeof obj !== 'object') return false;
  if (!isKey(key)) return false;
  return key in obj;
}

export function isValidUuid(id: unknown) {
  return isString(id) && REGEX_UUID.test(id);
}

export function isValidEmail(email: string) {
  return REGEX_EMAIL.test(email);
}
