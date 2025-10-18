import { InputClasses } from "../constants/classes";

import styles from "@/modules/form/components/Select.module.css";
import { SelectOption, SelectOptionValue } from "../types";
import { ErrorMessage } from "./ErrorMessage";

type multipleSelectedType =
	| {
			multiple: false;
			selected?: SelectOptionValue;
	  }
	| {
			multiple: true;
			selected?: SelectOptionValue[];
	  };

type SelectProps = {
	className?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	options: SelectOption[];
	error?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} & multipleSelectedType;

function selectedValue(
	multiple: boolean,
	selected?: SelectOptionValue | SelectOptionValue[],
) {
	if (multiple) {
		if (selected?.length === 0) return undefined;
		return selected as SelectOptionValue[];
	}
	return selected as SelectOptionValue;
}

export function Select({
	options,
	name,
	className = "",
	multiple,
	disabled,
	selected,
	onChange,
	error,
	...props
}: SelectProps) {
	const defaultValue = selected ? selectedValue(multiple, selected) : undefined;

	return (
		<>
			<select
				name={name}
				className={`${InputClasses} [appearance:none] ${styles.select} ${className}`}
				multiple={multiple}
				disabled={disabled}
				defaultValue={defaultValue}
				onChange={onChange}
				{...props}
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className="bg-sec-background focus:bg-background hover:bg-background"
					>
						{option.label}
					</option>
				))}
			</select>
			<ErrorMessage message={error} />
		</>
	);
}
