import { DragDropProvider } from '@dnd-kit/react';
import { isSortable } from '@dnd-kit/react/sortable';
import { SortableInputItem } from '@/presentation/modules/form/components/SortableInputItem';
import { Button } from '@/presentation/modules/button/components/Button';
import { SelectBox } from '@/presentation/modules/form/components/SelectBox';
import { useSortableInputItems } from '@/presentation/modules/form/hooks/useSortableInputItems';
import { IconCirclePlus } from '@/presentation/globals/components/icons/outline/IconCirclePlus';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import type { FieldArrayPath, Control, FieldValues } from 'react-hook-form';
import type { SelectOption } from '@/presentation/modules/form/form.types';

type Props<TForm extends FieldValues, TName extends FieldArrayPath<TForm>> = {
  addButtonLabel?: string;
  selectingTitle: string;
  name: TName;
  control: Control<TForm>;
  items: SelectOption[];
  itemsSelected?: SelectOption['value'][];
};

/**
 * Sortable and draggable form fields component.
 * -
 * @description It works with `useFieldArray` from `React Hook Form`. It only works with arrays with the following strcuture:
 * @example
 * type UserForm = {
 *  username: string
 *  name: string
 *  email: string
 *  tags: { id: string }[] // Tags is allowed to use this component
 * }
 */
export function SortableInputItems<TForm extends FieldValues, TName extends FieldArrayPath<TForm>>({
  name,
  addButtonLabel,
  control,
  items,
  itemsSelected = [],
  selectingTitle,
}: Props<TForm, TName>) {
  const {
    addMultipleItems,
    crearAllItems,
    fields,
    handleRemoveItem,
    isSelecting,
    makeFieldOption,
    openSelection,
    selectableItems,
    sortField,
    closeSelection,
  } = useSortableInputItems({
    control,
    items,
    itemsSelected,
    name,
  });

  return (
    <div className="space-y-2">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;
          const { operation } = event;
          const { source } = operation;
          if (!isSortable(source)) return;
          const { initialIndex, index } = source;
          sortField(initialIndex, index);
        }}
      >
        <main className="bg-fill-back min-h-16 space-y-2 rounded-lg p-2">
          {fields.map((field, index) => (
            <SortableInputItem
              key={field.fieldId}
              item={makeFieldOption((field as any).id)}
              index={index}
              onRemoveOption={handleRemoveItem(index)}
            />
          ))}
        </main>
      </DragDropProvider>
      <footer className="flex items-center justify-between">
        <Button
          variantConfig={{ color: 'simple' }}
          type="button"
          onClick={openSelection}
          className="pr-3 pl-2"
        >
          <IconCirclePlus />
          {addButtonLabel ?? 'Add'}
        </Button>
        <Button
          variantConfig={{ color: 'simple' }}
          type="button"
          onClick={crearAllItems}
          className="pr-3 pl-2"
        >
          <IconTrash />
          Clear All
        </Button>
      </footer>
      <SelectBox
        isOpen={isSelecting}
        options={selectableItems}
        title={selectingTitle}
        onClose={closeSelection}
        onAdd={addMultipleItems}
      />
    </div>
  );
}
