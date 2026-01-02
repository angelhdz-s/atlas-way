import { TextAreaClasses } from '../constants/classes';
import { TextAreaProps } from '../types';
import { ErrorMessage } from './ErrorMessage';

export function TextArea({
	name,
	className = '',
	placeholder = '',
	disabled = false,
	rows = 3,
	error,
	...props
}: TextAreaProps) {
	return (
		<>
			<textarea
				className={`${TextAreaClasses} ${className}`}
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				rows={rows}
				{...props}
			/>
			<ErrorMessage message={error} />
		</>
	);
}
