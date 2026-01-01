'use client';

import { useState } from 'react';
import { BoxMusclesAdder } from '@/modules/exercise/presentation/ui/components/BoxMusclesAdder';
import { Box } from '@/presentation/modules/form/components/Box';
import { SelectOption } from '@/presentation/modules/form/types';
import { CirclePlus, Trash, XMark } from '@/modules/globals/components/Icons';

function BoxOption({ label, onCrossClick }: { label: string; onCrossClick?: () => void }) {
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

export function MusclesSelection({ options }: { options: SelectOption[] }) {
	const [selectedMuscles, setSelectedMuscles] = useState<SelectOption[]>([]);
	const [isSelecting, setIsSelecting] = useState(false);

	const filteredOptions = options.filter((option) => !selectedMuscles.includes(option));

	const handleAddMuscle = () => {
		setIsSelecting(true);
	};

	const removeAllMusclesSelected = () => {
		setSelectedMuscles([]);
	};

	const handleAddMusclesSelection = (options: SelectOption[]) => {
		setSelectedMuscles((prev) => [...prev, ...options]);
		setIsSelecting(false);
	};

	const handleRemoveMusclesSelected = (option: SelectOption) => {
		setSelectedMuscles((prev) => prev.filter((muscle) => muscle.value !== option.value));
	};

	return (
		<>
			<div className="flex flex-col gap-2">
				<p>Muscles</p>
				<Box className="flex gap-2 h-32">
					<aside className="flex flex-col justify-between items-center gap-2">
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-zinc-900 border border-subtle/20 rounded text-main-foreground hover:bg-zinc-800/80 cursor-pointer transition-colors"
							onClick={handleAddMuscle}
						>
							<CirclePlus strokeWidth="1" />
						</button>
						<button
							type="button"
							className="block size-fit aspect-square p-1 bg-zinc-900 border border-subtle/20 rounded text-main-foreground hover:bg-zinc-800/80 cursor-pointer transition-colors"
							onClick={removeAllMusclesSelected}
						>
							<Trash strokeWidth="1" />
						</button>
					</aside>
					<main className="scrollbar-y flex-1 flex flex-wrap content-start gap-2 pb-4">
						{selectedMuscles.map((muscle) => (
							<BoxOption
								key={muscle.value}
								label={muscle.label}
								onCrossClick={() => handleRemoveMusclesSelected(muscle)}
							/>
						))}
					</main>
				</Box>
				<input
					type="hidden"
					name="muscles"
					value={selectedMuscles.map((muscle) => muscle.value).join(',')}
				/>
			</div>
			{isSelecting && (
				<>
					<div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ld-main-bg border border-subtle/10 rounded shadow-lg">
						<BoxMusclesAdder
							options={filteredOptions}
							onAdd={handleAddMusclesSelection}
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
