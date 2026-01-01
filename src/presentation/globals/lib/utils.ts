export function minorValue(a: Date, b: Date) {
	if (a < b) return a;
	return b;
}

export const generateId = () => Math.random().toString(36).substr(2, 9);
