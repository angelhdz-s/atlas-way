export const THEME = {
	DARK: "dark",
	LIGHT: "light",
};

export type Theme = (typeof THEME)[keyof typeof THEME];
