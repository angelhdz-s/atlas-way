import { useState } from 'react';
import { SelectOption } from '@/modules/form/types';

export function useMultipleSelectOptionsBox({
	options,
	onAdd,
	onClose,
}: {
	options: SelectOption[];
	onAdd: (options: SelectOption[]) => void;
	onClose?: () => void;
}) {
	const [search, setSearch] = useState<string>('');
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);

	const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(search));

	const handleClose = () => {
		onClose?.();
		console.log('closed');
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value.toLowerCase());
	};

	const handleSelectOption = (value: SelectOption) => {
		if (selectedOptions.includes(value)) {
			setSelectedOptions((prev) => prev.filter((selected) => selected !== value));
		} else {
			setSelectedOptions((prev) => [...prev, value]);
		}
	};

	const handleAddOptions = () => {
		onAdd(selectedOptions);
	};

	return {
		search,
		selectedOptions,
		filteredOptions,
		handleClose,
		handleSearchChange,
		handleSelectOption,
		handleAddOptions,
	};
}
