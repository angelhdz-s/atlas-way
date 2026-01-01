export type InputTextProps = {
	className?: string;
	name: string;
	placeholder?: string;
	disabled?: boolean;
	error?: string;
};

export type InputNumberProps = InputTextProps & {
	min?: string | number;
	max?: string | number;
	value?: string | number;
};

export type TextAreaProps = InputTextProps & {
	rows?: number;
};

export type SelectOptionValue = string;

export type SelectOption = {
	label: string;
	value: SelectOptionValue;
};
