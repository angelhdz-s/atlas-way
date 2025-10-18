import { InputClasses } from "../constants/classes";
import { InputTextProps } from "../types";
import { ErrorMessage } from "./ErrorMessage";

export function InputText({
	name,
	className = "",
	placeholder = "",
	disabled = false,
	error,
	...props
}: InputTextProps) {
	return (
		<>
			<input
				type="text"
				placeholder={placeholder}
				name={name}
				disabled={disabled}
				className={`${InputClasses} ${className}`}
				{...props}
			/>
			<ErrorMessage message={error} />
		</>
	);
}
