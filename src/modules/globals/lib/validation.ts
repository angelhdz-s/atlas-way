export function isString(value: unknown): boolean {
	return typeof value === 'string' || value instanceof String;
}

export function isNumber(value: unknown): boolean {
	return typeof value === 'number' || value instanceof Number;
}

export function isStringLength(value: string, length: number): boolean {
	return value.trim().length === length;
}

export function isStringInRange(text: string, minLength: number, maxLength: number): boolean {
	return text.trim().length >= minLength && text.trim().length <= maxLength;
}
