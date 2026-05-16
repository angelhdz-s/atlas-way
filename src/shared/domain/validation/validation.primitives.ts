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
