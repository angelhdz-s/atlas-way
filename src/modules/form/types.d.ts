export type InputTextProps = {
	className?: string;
	name: string;
	placeholder?: string;
	disabled?: boolean;
};

export type InputNumberProps = InputTextProps & {
	min?: number;
	max?: number;
	value?: number;
};

export type TextAreaProps = InputTextProps & {
	rows?: number;
};

export type SelectOptionValue = string;

export type SelectOption = {
	label: string;
	value: SelectOptionValue;
};
