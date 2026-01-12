'use client';

import { useEffect, useRef, useState } from 'react';
import { SelectOption } from '@/presentation/modules/form/types';

type UseMultipleSelectBoxProps = {
	options: SelectOption[];
	onOptionsChange?: (options: SelectOption[]) => void;
};

export function useMultipleSelectBox({ options, onOptionsChange }: UseMultipleSelectBoxProps) {
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
	const currentOptions = useRef(selectedOptions);
	const [isSelecting, setIsSelecting] = useState(false);

	const filteredOptions = options.filter((option) => !selectedOptions.includes(option));

	const handleCloseSelectOptions = () => {
		setIsSelecting(false);
	};

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
			prev.filter((selectedOption) => selectedOption.value !== option.value)
		);
	};

	useEffect(() => {
		if (currentOptions.current === selectedOptions) return;
		currentOptions.current = selectedOptions;
		onOptionsChange?.(currentOptions.current);
	}, [selectedOptions, onOptionsChange]);

	return {
		selectedOptions,
		isSelecting,
		filteredOptions,
		handleAddOption,
		removeAllOptionsSelected,
		handleAddOptionsSelection,
		handleRemoveOptionsSelected,
		handleCloseSelectOptions,
	};
}
