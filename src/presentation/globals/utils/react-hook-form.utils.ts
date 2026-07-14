export const inputNumberConfig = {
  setValueAs: (v: string) => (v === '' ? undefined : Number(v)),
  validate: (v: number | undefined) => v === undefined || !Number.isNaN(v) || 'Invalid number',
};

export const inputDescriptionConfig = {
  setValueAs: (value: string) => {
    const valueTrimmed = value.trim();
    if (!valueTrimmed) return null;
    return value;
  },
};
