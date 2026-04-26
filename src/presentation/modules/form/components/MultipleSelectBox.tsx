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
    <div className="bg-fill-base border-bd-muted flex w-fit max-w-36 items-center gap-0.5 rounded-lg border px-1 py-1 pl-3 hover:border-transparent">
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
        <header className="text-strong font-medium">{label}</header>
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
            <Button
              onClick={openSelection}
              variantConfig={{ type: 'square', color: 'subtle' }}
              aria-label="Add new element"
            >
              <IconCirclePlus strokeWidth="1" />
            </Button>
            <Button
              onClick={clearAllItems}
              variantConfig={{ type: 'square', color: 'subtle' }}
              aria-label="Clear all elements"
            >
              <IconTrash strokeWidth="1" />
            </Button>
          </aside>
        </Box>
        <ErrorMessage message={error} />
      </div>
      <SelectBox
        isOpen={isSelecting}
        title={selectingTitle}
        options={selectableItems}
        onAdd={addMultipleItems}
        onClose={closeSelection}
      />
    </>
  );
}
