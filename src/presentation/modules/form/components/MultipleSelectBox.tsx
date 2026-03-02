'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { MultipleSelectOptionsBox } from '@/presentation/modules/form/components/MultipleSelectOptionsBox';
import { useMultipleSelectBox } from '@/presentation/modules/form/hooks/useMultipleSelectBox';
import type { SelectOption } from '@/presentation/modules/form/types';
import {
  CirclePlus,
  Trash,
  XMark,
} from '@/presentation/globals/components/Icons';
import { ErrorMessage } from './ErrorMessage';

function SelectedOptions({
  label,
  onCrossClick,
}: {
  label: string;
  onCrossClick?: () => void;
}) {
  return (
    <div className="bg-sec-back border-subtle/10 flex w-fit items-center rounded-full border px-2">
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
        <Box className="flex h-32 gap-2">
          <aside className="flex flex-col items-center justify-between gap-2">
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={handleAddOption}
            >
              <CirclePlus strokeWidth="1" />
            </button>
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={removeAllOptionsSelected}
            >
              <Trash strokeWidth="1" />
            </button>
          </aside>
          <main className="scrollbar-y flex flex-1 flex-wrap content-start gap-2 pb-4">
            {selectedOptions.map((selectedOption) => (
              <SelectedOptions
                key={selectedOption.value}
                label={selectedOption.label}
                onCrossClick={() =>
                  handleRemoveOptionsSelected(
                    selectedOption
                  )
                }
              />
            ))}
          </main>
        </Box>
        {children}
        <ErrorMessage message={error} />
      </div>
      {isSelecting && (
        <>
          <div className="border-subtle/10 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded border shadow-lg">
            <MultipleSelectOptionsBox
              title={selectingTitle}
              options={filteredOptions}
              onAdd={handleAddOptionsSelection}
              onClose={handleCloseSelectOptions}
            />
          </div>
          <div
            onClick={handleCloseSelectOptions}
            className="light:bg-black/25 fixed inset-0 z-40 bg-black/50"
          />
        </>
      )}
    </>
  );
}
