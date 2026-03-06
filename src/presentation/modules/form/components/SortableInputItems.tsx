import { DragDropProvider } from '@dnd-kit/react';
import { isSortable } from '@dnd-kit/react/sortable';
import type { ArrayFieldWithLabel, SelectOption, SortableSelectedItem } from '../types';
import { SortableInputItem } from './SortableInputItem';
import type { ArrayPath, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { VariantButton } from '../../button/components/VariantButton';
import { IconCirclePlus, IconTrash } from '@/presentation/globals/components/Icons';
import { MultipleSelectOptionsBox } from './MultipleSelectOptionsBox';

interface DynamicInputProps<T extends FieldValues> {
  name: ArrayPath<T>;
  register: UseFormRegister<T>;
}

type Props<T extends FieldValues> = {
  isSelecting: boolean;
  fields: ArrayFieldWithLabel[];
  nonSelectedItems: SelectOption[];
  handleSortItem: (oldIndex: number, newIndex: number) => void;
  handleRemoveItem: (id: string, index: number) => void;
  handleOpenItemsSelection: () => void;
  handleAddItems: (items: SortableSelectedItem[]) => void;
  handleClearAllItems: () => void;
  handleCloseItemsSelection: () => void;
  dynamicInputProps: DynamicInputProps<T>;
  addLabel?: string;
};

export function SortableInputItems<T extends FieldValues>({
  fields,
  handleSortItem,
  handleRemoveItem,
  handleOpenItemsSelection,
  isSelecting,
  nonSelectedItems,
  handleClearAllItems,
  handleCloseItemsSelection,
  handleAddItems,
  dynamicInputProps,
  addLabel,
}: Props<T>) {
  const { register, name } = dynamicInputProps;
  const handleAddOptions = (optons: SelectOption[]) => {
    const items = optons.map((option) => ({
      id: option.value,
    }));
    handleAddItems(items);
  };
  return (
    <div className="space-y-2">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;
          const { operation } = event;
          const { source } = operation;
          if (!isSortable(source)) return;
          const { initialIndex, index } = source;
          handleSortItem(initialIndex, index);
        }}
      >
        <main className="bg-back min-h-16 space-y-2 rounded-lg p-2">
          {fields.map((field, index) => (
            <SortableInputItem
              key={field.fieldId}
              field={field}
              index={index}
              onRemoveOption={handleRemoveItem}
              register={register(`${name}.${index}.id` as Path<T>)}
            />
          ))}
        </main>
      </DragDropProvider>
      <footer className="flex items-center justify-between">
        <VariantButton
          variantConfig={{ color: 'simple' }}
          type="button"
          onClick={handleOpenItemsSelection}
          className="pr-3 pl-2"
        >
          <IconCirclePlus />
          {addLabel ?? 'Add'}
        </VariantButton>
        <VariantButton
          variantConfig={{ color: 'simple' }}
          type="button"
          onClick={handleClearAllItems}
          className="pr-3 pl-2"
        >
          <IconTrash />
          Clear All
        </VariantButton>
      </footer>
      {isSelecting && (
        <div className="fixed inset-0 grid place-content-center">
          <MultipleSelectOptionsBox
            options={nonSelectedItems}
            title="Your Exercises"
            onClose={handleCloseItemsSelection}
            onAdd={handleAddOptions}
          />
        </div>
      )}
    </div>
  );
}
