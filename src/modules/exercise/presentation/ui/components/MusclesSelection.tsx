'use client';

import { useState } from 'react';
import { BoxMusclesAdder } from '@/modules/exercise/presentation/ui/components/BoxMusclesAdder';
import { Box } from '@/presentation/modules/form/components/Box';
import type { SelectOption } from '@/presentation/modules/form/types';
import {
  CirclePlus,
  Trash,
  XMark,
} from '@/presentation/globals/components/Icons';

function BoxOption({
  label,
  onCrossClick,
}: {
  label: string;
  onCrossClick?: () => void;
}) {
  return (
    <div className="bg-middle border-bd-strong flex w-fit items-center rounded-full border px-2">
      {label}
      {onCrossClick && (
        <button
          type="button"
          onClick={onCrossClick}
          className="cursor-pointer transition-opacity hover:opacity-50"
        >
          <XMark className="size-5" strokeWidth="1" />
        </button>
      )}
    </div>
  );
}

export function MusclesSelection({
  options,
}: {
  options: SelectOption[];
}) {
  const [selectedMuscles, setSelectedMuscles] = useState<
    SelectOption[]
  >([]);
  const [isSelecting, setIsSelecting] = useState(false);

  const filteredOptions = options.filter(
    (option) => !selectedMuscles.includes(option)
  );

  const handleAddMuscle = () => {
    setIsSelecting(true);
  };

  const removeAllMusclesSelected = () => {
    setSelectedMuscles([]);
  };

  const handleAddMusclesSelection = (
    options: SelectOption[]
  ) => {
    setSelectedMuscles((prev) => [...prev, ...options]);
    setIsSelecting(false);
  };

  const handleRemoveMusclesSelected = (
    option: SelectOption
  ) => {
    setSelectedMuscles((prev) =>
      prev.filter((muscle) => muscle.value !== option.value)
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <p>Muscles</p>
        <Box className="flex h-32 gap-2">
          <aside className="flex flex-col items-center justify-between gap-2">
            <button
              type="button"
              className="border-subtle/20 fg-strong block aspect-square size-fit cursor-pointer rounded border bg-zinc-900 p-1 transition-colors hover:bg-zinc-800/80"
              onClick={handleAddMuscle}
            >
              <CirclePlus strokeWidth="1" />
            </button>
            <button
              type="button"
              className="border-subtle/20 fg-strong block aspect-square size-fit cursor-pointer rounded border bg-zinc-900 p-1 transition-colors hover:bg-zinc-800/80"
              onClick={removeAllMusclesSelected}
            >
              <Trash strokeWidth="1" />
            </button>
          </aside>
          <main className="scrollbar-y flex flex-1 flex-wrap content-start gap-2 pb-4">
            {selectedMuscles.map((muscle) => (
              <BoxOption
                key={muscle.value}
                label={muscle.label}
                onCrossClick={() =>
                  handleRemoveMusclesSelected(muscle)
                }
              />
            ))}
          </main>
        </Box>
        <input
          type="hidden"
          name="muscles"
          value={selectedMuscles
            .map((muscle) => muscle.value)
            .join(',')}
        />
      </div>
      {isSelecting && (
        <>
          <div className="ld-main-bg border-subtle/10 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded border shadow-lg">
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
