'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { MultipleSelectOptionsBox } from '@/presentation/modules/form/components/MultipleSelectOptionsBox';
import { useMultipleSelectBox } from '@/presentation/modules/form/hooks/useMultipleSelectBox';
import { SelectOption } from '@/presentation/modules/form/types';
import { CirclePlus, Trash, XMark } from '@/presentation/globals/components/Icons';
import { ErrorMessage } from './ErrorMessage';

function SelectedOptions({ label, onCrossClick }: { label: string; onCrossClick?: () => void }) {
	return (
		<div className="flex items-center bg-sec-back border border-subtle/10 rounded-full px-2 w-fit">
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
	selectingTitle,
	options,
	error,
	children,
	onOptionsChange,
}: {
	label: string;
	selectingTitle: string;
	options: SelectOption[];
	error?: string;
	children?: React.ReactNode;
	onOptionsChange?: (options: SelectOption[]) => void;
}) {
	const {
		filteredOptions,
		handleAddOption,
		handleAddOptionsSelection,
		handleRemoveOptionsSelected,
		isSelecting,
		removeAllOptionsSelected,
		selectedOptions,
		handleCloseSelectOptions,
	} = useMultipleSelectBox({ options, onOptionsChange });

	return (
		<>
			<div className="flex flex-col gap-2">
				<p>{label}</p>
				<Box className="flex gap-2 h-32">
					<aside className="flex flex-col justify-between items-center gap-2">
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-middle border border-bd-default rounded fg-strong hover:bg-back cursor-pointer transition-colors"
							onClick={handleAddOption}
						>
							<CirclePlus strokeWidth="1" />
						</button>
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-middle border border-bd-default rounded fg-strong hover:bg-back cursor-pointer transition-colors"
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
				{children}
				<ErrorMessage message={error} />
			</div>
			{isSelecting && (
				<>
					<div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-subtle/10 rounded shadow-lg">
						<MultipleSelectOptionsBox
							title={selectingTitle}
							options={filteredOptions}
							onAdd={handleAddOptionsSelection}
							onClose={handleCloseSelectOptions}
						/>
					</div>
					<div
						onClick={handleCloseSelectOptions}
						className="fixed inset-0 z-40 bg-black/50 light:bg-black/25"
					/>
				</>
			)}
		</>
	);
}
