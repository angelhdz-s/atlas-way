export function minorValue(a: Date, b: Date) {
  if (a < b) return a;
  return b;
}

export const generateId = () => Math.random().toString(36).substr(2, 9);

type ObjectOptionalKeys<T> = {
  [K in keyof T]?: any;
};

export function removeObjectKey<T>(
  object: ObjectOptionalKeys<T>,
  targetKey: keyof T
): ObjectOptionalKeys<T> {
  const newPrev: ObjectOptionalKeys<T> = {};
  for (const key in object) {
    if (key === targetKey) continue;
    newPrev[key] = object[key];
  }
  return newPrev;
}
