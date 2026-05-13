import { REGEX_EMAIL, REGEX_UUID } from '@/shared/domain/validation.constants';

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isIntegerNumber(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value);
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is object {
  return value?.constructor === Object;
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export function isKey(value: unknown): value is symbol | number | string {
  return isIntegerNumber(value) || isString(value) || isSymbol(value);
}

export function isKeyOf<T>(key: unknown, obj: T): key is keyof T {
  if (!isObject(obj)) return false;
  if (!isKey(key)) return false;
  return key in obj;
}

export function isValidUuid(id: unknown) {
  return isString(id) && REGEX_UUID.test(id);
}

export function isValidEmail(email: string) {
  return REGEX_EMAIL.test(email);
}
