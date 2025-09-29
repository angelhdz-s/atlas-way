import { InputClasses } from "../constants/classes";
import { InputTextProps } from "../types";

export function InputText({
	name,
	className = "",
	placeholder = "",
	disabled = false,
}: InputTextProps) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			name={name}
			disabled={disabled}
			className={`${InputClasses} ${className}`}
		/>
	);
}
