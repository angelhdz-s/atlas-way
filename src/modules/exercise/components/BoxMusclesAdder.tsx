import { useState } from "react";
import { Box } from "@/modules/form/components/Box";
import { SelectOption } from "@/modules/form/types";

function BoxOption({
	option,
	isSelected = false,
	onSelect,
}: {
	option: SelectOption;
	isSelected?: boolean;
	onSelect: (value: SelectOption) => void;
}) {
	const isActiveClass = isSelected ? "bg-primary text-white" : "";
	return (
		<label
			className={`w-fit rounded-full border border-subtle/10 px-3 py-1 leading-1 ${isActiveClass}`}
		>
			<span className="text-sm">{option.label}</span>
			<input
				className="hidden"
				type="checkbox"
				onChange={() => onSelect(option)}
			/>
		</label>
	);
}

export function BoxMusclesAdder({
	options,
	onAdd,
}: {
	options: SelectOption[];
	onAdd: (options: SelectOption[]) => void;
}) {
	const [search, setSearch] = useState<string>("");
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(search),
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSelectOption = (value: SelectOption) => {
		if (selectedOptions.includes(value)) {
			setSelectedOptions((prev) =>
				prev.filter((selected) => selected !== value),
			);
		} else {
			setSelectedOptions((prev) => [...prev, value]);
		}
	};

	const handleAddOptions = () => {
		onAdd(selectedOptions);
	};

	return (
		<div className="bg-zinc-900 p-4 border border-subtle/20 rounded-lg w-100">
			<header>
				<h2 className="text-lg font-medium mb-2">Select Muscles</h2>
			</header>
			<input
				className="rounded-full w-full px-4 py-1 mb-2 bg-background/30 text-base font-light outline-none"
				type="search"
				value={search}
				placeholder="Search muscles..."
				onChange={handleSearchChange}
			/>
			<Box className="scrollbar-y h-64 rounded-lg flex flex-wrap content-start gap-2 pb-8">
				{filteredOptions.map((option) => (
					<BoxOption
						key={option.value}
						option={option}
						onSelect={handleSelectOption}
						isSelected={selectedOptions.includes(option)}
					/>
				))}
			</Box>
			<footer className="mt-4 flex gap-2">
				<button
					type="button"
					onClick={handleAddOptions}
					className="flex-1 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
				>
					Add
				</button>
			</footer>
		</div>
	);
}
