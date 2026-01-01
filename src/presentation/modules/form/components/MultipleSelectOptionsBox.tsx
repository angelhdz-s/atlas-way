import { Box } from '@/presentation/modules/form/components/Box';
import { useMultipleSelectOptionsBox } from '@/presentation/modules/form/hooks/useMultipleSelectOptionsBox';
import { SelectOption } from '@/presentation/modules/form/types';
import { CirclePlus, Search } from '@/modules/globals/components/Icons';

function SelectOptionBox({
	option,
	isSelected = false,
	onSelect,
}: {
	option: SelectOption;
	isSelected?: boolean;
	onSelect: (value: SelectOption) => void;
}) {
	const isActiveClass = isSelected
		? 'border-complete text-complete font-medium'
		: 'border-subtle/20';
	return (
		<label
			className={`cursor-pointer w-fit rounded-full border px-3 py-1 leading-1 hover:border-complete hover:text-complete ${isActiveClass}`}
		>
			<span className="text-sm">{option.label}</span>
			<input className="hidden" type="checkbox" onChange={() => onSelect(option)} />
		</label>
	);
}

export function MultipleSelectOptionsBox({
	title,
	options,
	onAdd,
	onClose,
}: {
	title: string;
	options: SelectOption[];
	onAdd: (options: SelectOption[]) => void;
	onClose?: () => void;
}) {
	const {
		filteredOptions,
		handleClose,
		handleAddOptions,
		handleSearchChange,
		handleSelectOption,
		search,
		selectedOptions,
	} = useMultipleSelectOptionsBox({ options, onAdd, onClose });

	return (
		<div className="flex flex-col gap-2 bg-zinc-900 p-4 border border-subtle/20 rounded-lg w-120">
			<header className="flex flex-col gap-1">
				<h5 className="text-xl font-medium mb-2">{title}</h5>
				<label className="flex items-center gap-2 rounded-full w-full px-4 py-2 mb-2 bg-background/30 text-base font-light outline-none">
					<Search className="size-5 text-subtle" strokeWidth="2" />
					<input
						type="search"
						className="outline-none appearance-none w-full"
						value={search}
						placeholder="Search..."
						onChange={handleSearchChange}
					/>
				</label>
			</header>
			<Box className="scrollbar-y h-64 rounded-lg flex flex-wrap content-start gap-2 p-4 pb-8">
				{filteredOptions.map((option) => (
					<SelectOptionBox
						key={option.value}
						option={option}
						onSelect={handleSelectOption}
						isSelected={selectedOptions.includes(option)}
					/>
				))}
			</Box>
			<footer className="flex gap-2 [&_button]:w-fit [&_button]:flex [&_button]:items-center [&_button]:gap-2 [&_button]:cursor-pointer [&_button]:transition-colors">
				<button
					type="button"
					onClick={handleAddOptions}
					className="font-medium text-complete border border-complete px-4 py-2 rounded hover:bg-complete/50 hover:text-main-foreground"
				>
					<CirclePlus className="size-5" strokeWidth="2" />
					Add
				</button>
				<button
					type="button"
					onClick={handleClose}
					className="font-medium text-subtle border border-subtle/20 px-4 py-2 rounded hover:border-subtle/50 hover:text-foreground"
				>
					Cancel
				</button>
			</footer>
		</div>
	);
}
