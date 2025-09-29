import { TextAreaClasses } from "../constants/classes";
import { TextAreaProps } from "../types";

export function TextArea({
	name,
	className = "",
	placeholder = "",
	disabled = false,
	rows = 3,
}: TextAreaProps) {
	return (
		<textarea
			className={`${TextAreaClasses} ${className}`}
			name={name}
			placeholder={placeholder}
			disabled={disabled}
			rows={rows}
		/>
	);
}
