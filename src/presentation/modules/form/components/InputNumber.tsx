import { useState } from 'react';
import { InputClasses } from '../constants/classes';
import { InputNumberProps } from '../types';
import { ErrorMessage } from './ErrorMessage';

export function InputNumber({
	name,
	className = '',
	disabled = false,
	placeholder,
	min,
	max,
	value = '',
	error,
	...props
}: InputNumberProps) {
	const [currentValue, setCurrentValue] = useState<string | number | undefined>(value);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		if (val !== currentValue) setCurrentValue(val);
	};
	return (
		<>
			<input
				{...props}
				type="number"
				name={name}
				disabled={disabled}
				className={`${InputClasses} ${className}`}
				placeholder={placeholder}
				min={min}
				max={max}
				value={currentValue}
				onChange={handleChange}
			/>
			<ErrorMessage message={error} />
		</>
	);
}
