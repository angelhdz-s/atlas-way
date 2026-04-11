'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { useMultipleSelectBox } from '@/presentation/modules/form/hooks/useMultipleSelectBox';
import { IconCirclePlus } from '@/presentation/globals/components/icons/outline/IconCirclePlus';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { Button } from '@/presentation/modules/button/components/Button';
import { SelectBox } from '@/presentation/modules/form/components/SelectBox';
import type { Control, FieldArrayPath, FieldValues } from 'react-hook-form';
import type { SelectOption } from '@/presentation/modules/form/form.types';

type SelectedOption = {
  option: SelectOption;
  onCrossClick?: (item: SelectOption['value']) => void;
};

function SelectedOptions({ option, onCrossClick }: SelectedOption) {
  const handleClick = () => {
    onCrossClick?.(option.value);
  };
  return (
    <div className="bg-middle border-bd-muted flex w-fit max-w-36 items-center gap-0.5 rounded-lg border px-1 py-1 pl-3 hover:border-transparent">
      <span className="truncate">{option.label}</span>
      {onCrossClick && (
        <Button
          variantConfig={{ size: 'xs', type: 'square' }}
          type="button"
          onClick={handleClick}
          className="cursor-pointer transition-opacity hover:opacity-50"
        >
          <IconXMark className="size-5" strokeWidth="1" />
        </Button>
      )}
    </div>
  );
}

type Props<TForm extends FieldValues, TName extends FieldArrayPath<TForm>> = {
  items: SelectOption[];
  itemsSelected?: SelectOption['value'][];
  name: TName;
  control: Control<TForm>;
  label: string;
  selectingTitle: string;
  error?: string;
};

export function MultipleSelectBox<TForm extends FieldValues, TName extends FieldArrayPath<TForm>>({
  control,
  items,
  label,
  name,
  itemsSelected = [],
  selectingTitle,
  error,
}: Props<TForm, TName>) {
  const {
    isSelecting,
    addMultipleItems,
    closeSelection,
    clearAllItems,
    fields,
    handleRemoveItem,
    makeFieldOption,
    openSelection,
    selectableItems,
  } = useMultipleSelectBox({
    control,
    items,
    itemsSelected,
    name,
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <header className="fg-strong font-medium">{label}</header>
        <Box className="flex h-48 gap-1">
          <main className="scrollbar-y flex flex-1 flex-wrap content-start gap-2 pb-4">
            {fields.map((field, index) => (
              <SelectedOptions
                key={field.fieldId}
                option={makeFieldOption((field as any).id)}
                onCrossClick={handleRemoveItem(index)}
              />
            ))}
          </main>
          <aside className="flex flex-col items-center justify-between gap-2">
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={openSelection}
            >
              <IconCirclePlus strokeWidth="1" />
            </button>
            <button
              type="button"
              className="bg-middle border-bd-default fg-strong hover:bg-back block aspect-square size-fit cursor-pointer rounded border p-1 transition-colors"
              onClick={clearAllItems}
            >
              <IconTrash strokeWidth="1" />
            </button>
          </aside>
        </Box>
        <ErrorMessage message={error} />
      </div>
      {isSelecting && (
        <>
          <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg">
            <SelectBox
              title={selectingTitle}
              options={selectableItems}
              onAdd={addMultipleItems}
              onClose={closeSelection}
            />
          </div>
          <div
            onClick={closeSelection}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeSelection();
            }}
            className="light:bg-black/25 fixed inset-0 z-40 bg-black/50"
          />
        </>
      )}
    </>
  );
}
