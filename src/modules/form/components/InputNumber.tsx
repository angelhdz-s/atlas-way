import { InputClasses } from "../constants/classes";
import { InputNumberProps } from "../types";

export function InputNumber({
	name,
	className = "",
	disabled = false,
	placeholder,
	min,
	max,
	value,
}: InputNumberProps) {
	return (
		<input
			type="number"
			name={name}
			disabled={disabled}
			className={`${InputClasses} ${className}`}
			placeholder={placeholder}
			min={min}
			max={max}
			value={value}
		/>
	);
}
