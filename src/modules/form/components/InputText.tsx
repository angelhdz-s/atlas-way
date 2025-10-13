import { InputClasses } from "../constants/classes";
import { InputTextProps } from "../types";

export function InputText({
	name,
	className = "",
	placeholder = "",
	disabled = false,
	...props
}: InputTextProps) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			name={name}
			disabled={disabled}
			className={`${InputClasses} ${className}`}
			{...props}
		/>
	);
}
