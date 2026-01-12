'use client';

import { useState } from 'react';
import { SelectOption } from '@/presentation/modules/form/types';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { Radiobutton } from '@/presentation/modules/form/components/Radiobutton';

type RadiobuttonsProps = {
	className?: string;
	error?: string;
	checked?: string;
	options: SelectOption[];
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadiobuttonGroup({
	className = '',
	error,
	checked = '',
	onChange,
	options,
	...props
}: RadiobuttonsProps) {
	const [selected, setSelected] = useState<string>(checked);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.value === selected) return;
		const value = e.currentTarget.value;
		setSelected(value);
		onChange?.(e);
	};

	return (
		<>
			<div className={`${className}`}>
				{options.map((option) => (
					<Radiobutton
						key={option.value}
						checked={option.value === selected}
						value={option.value}
						label={option.label}
						onChange={handleChange}
						{...props}
					/>
				))}
			</div>
			<ErrorMessage message={error} />
		</>
	);
}
