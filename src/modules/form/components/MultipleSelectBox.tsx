"use client";

import { Box } from "@/modules/form/components/Box";
import { MultipleSelectOptionsBox } from "@/modules/form/components/MultipleSelectOptionsBox";
import { useMultipleSelectBox } from "@/modules/form/hooks/useMultipleSelectBox";
import { SelectOption } from "@/modules/form/types";
import { CirclePlus, Trash, XMark } from "@/modules/globals/components/Icons";

function SelectedOptions({
	label,
	onCrossClick,
}: {
	label: string;
	onCrossClick?: () => void;
}) {
	return (
		<div className="flex items-center bg-sec-background border border-subtle/10 rounded-full px-2 w-fit">
			{label}
			{onCrossClick && (
				<button
					type="button"
					onClick={onCrossClick}
					className="cursor-pointer hover:opacity-50 transition-opacity"
				>
					<XMark className="size-5" strokeWidth="1" />
				</button>
			)}
		</div>
	);
}

export function MultipleSelectBox({
	label,
	name,
	selectingTitle,
	options,
}: {
	label: string;
	selectingTitle: string;
	name: string;
	options: SelectOption[];
}) {
	const {
		filteredOptions,
		handleAddOption,
		handleAddOptionsSelection,
		handleRemoveOptionsSelected,
		isSelecting,
		removeAllOptionsSelected,
		selectedOptions,
		setIsSelecting,
	} = useMultipleSelectBox({ options });

	return (
		<>
			<div className="flex flex-col gap-2">
				<p>{label}</p>
				<Box className="flex gap-2 h-32">
					<aside className="flex flex-col justify-between items-center gap-2">
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-zinc-900 border border-subtle/20 rounded text-main-foreground hover:bg-zinc-800/80 cursor-pointer transition-colors"
							onClick={handleAddOption}
						>
							<CirclePlus strokeWidth="1" />
						</button>
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-zinc-900 border border-subtle/20 rounded text-main-foreground hover:bg-zinc-800/80 cursor-pointer transition-colors"
							onClick={removeAllOptionsSelected}
						>
							<Trash strokeWidth="1" />
						</button>
					</aside>
					<main className="scrollbar-y flex-1 flex flex-wrap content-start gap-2 pb-4">
						{selectedOptions.map((selectedOption) => (
							<SelectedOptions
								key={selectedOption.value}
								label={selectedOption.label}
								onCrossClick={() => handleRemoveOptionsSelected(selectedOption)}
							/>
						))}
					</main>
				</Box>
				<input
					type="hidden"
					name={name}
					value={selectedOptions
						.map((selectedOption) => selectedOption.value)
						.join(",")}
				/>
			</div>
			{isSelecting && (
				<>
					<div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ld-main-bg border border-subtle/10 rounded shadow-lg">
						<MultipleSelectOptionsBox
							title={selectingTitle}
							options={filteredOptions}
							onAdd={handleAddOptionsSelection}
						/>
					</div>
					<div
						onClick={() => setIsSelecting(false)}
						className="fixed inset-0 z-40 bg-black/50"
					/>
				</>
			)}
		</>
	);
}
