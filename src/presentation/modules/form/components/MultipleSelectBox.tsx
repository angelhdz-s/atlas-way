'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { MultipleSelectOptionsBox } from '@/presentation/modules/form/components/MultipleSelectOptionsBox';
import { useMultipleSelectBox } from '@/presentation/modules/form/hooks/useMultipleSelectBox';
import type { SelectOption } from '@/presentation/modules/form/types';
import { IconCirclePlus, IconTrash, IconXMark } from '@/presentation/globals/components/Icons';
import { ErrorMessage } from './ErrorMessage';
import { VariantButton } from '../../button/components/VariantButton';

function SelectedOptions({ label, onCrossClick }: { label: string; onCrossClick?: () => void }) {
  return (
    <div className="bg-middle border-bd-muted flex w-fit max-w-36 items-center gap-0.5 rounded-lg border px-1 py-1 pl-3 hover:border-transparent">
      <span className="truncate">{label}</span>
      {onCrossClick && (
        <VariantButton
          variantConfig={{ size: 'xs', type: 'square' }}
          type="button"
          onClick={onCrossClick}
          className="cursor-pointer transition-opacity hover:opacity-50"
        >
          <IconXMark className="size-5" strokeWidth="1" />
        </VariantButton>
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
        <header className="fg-strong font-medium">{label}</header>
        <Box className="flex h-48 gap-1">
          <main className="scrollbar-y flex flex-1 flex-wrap content-start gap-2 pb-4">
            {selectedOptions.map((selectedOption) => (
              <SelectedOptions
                key={selectedOption.value}
                label={selectedOption.label}
                onCrossClick={() => handleRemoveOptionsSelected(selectedOption)}
              />
            ))}
          </main>
          <aside className="flex flex-col items-center justify-between gap-2">
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={handleAddOption}
            >
              <IconCirclePlus strokeWidth="1" />
            </button>
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={removeAllOptionsSelected}
            >
              <IconTrash strokeWidth="1" />
            </button>
          </aside>
        </Box>
        {children}
        <ErrorMessage message={error} />
      </div>
      {isSelecting && (
        <>
          <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg">
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
