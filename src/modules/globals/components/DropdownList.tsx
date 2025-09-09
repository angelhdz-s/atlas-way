type DropdownListValueType = {
	label: string;
	value: string | number;
};
export type DropdownListProps = {
	selectedValue?: DropdownListValueType["value"];
	className?: string;
	values: DropdownListValueType[];
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function DropdownList({
	selectedValue,
	className,
	values,
	onChange,
}: DropdownListProps) {
	return (
		<select
			className={`border bg-background ${className}`}
			onChange={onChange}
			value={selectedValue}
		>
			{values.map((value) => (
				<option key={value.value} value={value.value}>
					{value.label}
				</option>
			))}
		</select>
	);
}
