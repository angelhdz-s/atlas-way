import { useState } from "react";
import { SelectOption } from "@/modules/form/types";

export function useMultipleSelectBox({ options }: { options: SelectOption[] }) {
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
	const [isSelecting, setIsSelecting] = useState(false);

	const filteredOptions = options.filter(
		(option) => !selectedOptions.includes(option),
	);

	const handleAddOption = () => {
		setIsSelecting(true);
	};

	const removeAllOptionsSelected = () => {
		setSelectedOptions([]);
	};

	const handleAddOptionsSelection = (options: SelectOption[]) => {
		setSelectedOptions((prev) => [...prev, ...options]);
		setIsSelecting(false);
	};

	const handleRemoveOptionsSelected = (option: SelectOption) => {
		setSelectedOptions((prev) =>
			prev.filter((selectedOption) => selectedOption.value !== option.value),
		);
	};

	return {
		selectedOptions,
		isSelecting,
		filteredOptions,
		handleAddOption,
		removeAllOptionsSelected,
		handleAddOptionsSelection,
		handleRemoveOptionsSelected,
		setIsSelecting,
	};
}
