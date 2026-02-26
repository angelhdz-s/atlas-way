import { useEffect, useState } from 'react';

type DropdownListValueType = {
	label: string;
	value: string | number;
};
export type DropdownListProps = {
	selectedValue?: DropdownListValueType['value'];
	className?: string;
	values: DropdownListValueType[];
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function DropdownList({
	selectedValue = '',
	className,
	values,
	onChange,
}: DropdownListProps) {
	const [selectedOption, setSelectedOption] =
		useState<DropdownListValueType['value']>(selectedValue);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e);
	};

	useEffect(() => {
		setSelectedOption(selectedValue);
	}, [selectedValue]);

	return (
		<select
			className={`border bg-back ${className}`}
			onChange={handleChange}
			value={selectedOption}
		>
			{values.map((value) => (
				<option key={value.value} value={value.value}>
					{value.label}
				</option>
			))}
		</select>
	);
}
