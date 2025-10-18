export const inputNumberConfig = {
	setValueAs: (v: string) => (v === "" ? undefined : Number(v)),
	validate: (v: number | undefined) =>
		v === undefined || !isNaN(v) || "Invalid number",
};
