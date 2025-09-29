import { Box } from "@/modules/form/components/Box";
import { useMultipleSelectOptionsBox } from "@/modules/form/hooks/useMultipleSelectOptionsBox";
import { SelectOption } from "@/modules/form/types";

function SelectOptionBox({
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

export function MultipleSelectOptionsBox({
	title,
	options,
	onAdd,
}: {
	title: string;
	options: SelectOption[];
	onAdd: (options: SelectOption[]) => void;
}) {
	const {
		filteredOptions,
		handleAddOptions,
		handleSearchChange,
		handleSelectOption,
		search,
		selectedOptions,
	} = useMultipleSelectOptionsBox({ options, onAdd });

	return (
		<div className="bg-zinc-900 p-4 border border-subtle/20 rounded-lg w-100">
			<header>
				<h2 className="text-lg font-medium mb-2">{title}</h2>
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
					<SelectOptionBox
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
