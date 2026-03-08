import {
  type Control,
  type FieldArrayPath,
  type FieldValues,
  useFieldArray,
} from 'react-hook-form';
import type { SelectOption } from '../types';
import { useMemo, useState } from 'react';

type Props<TForm extends FieldValues, TName extends FieldArrayPath<TForm>> = {
  items: SelectOption[];
  itemsSelected: SelectOption['value'][];
  name: TName;
  control: Control<TForm>;
};

/**
 * Custom hook for draggable and sortabble select list of items
 */

export function useSortableInputItems<
  TForm extends FieldValues,
  TName extends FieldArrayPath<TForm>,
>({ control, items, name, itemsSelected }: Props<TForm, TName>) {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [_selectedItems, setSelectedItems] = useState<SelectOption['value'][]>(itemsSelected);
  const intialSelectableItems = useMemo(() => {
    return items.filter((item) => !itemsSelected.includes(item.value));
  }, [items, itemsSelected]);

  const [selectableItems, setSelectableItems] = useState<SelectOption[]>(intialSelectableItems);

  const { fields, remove, replace, move } = useFieldArray({
    control,
    name,
    keyName: 'fieldId',
  });

  const openSelection = () => {
    if (isSelecting) return;
    setIsSelecting(true);
  };

  const closeSelection = () => {
    if (!isSelecting) return;
    setIsSelecting(false);
  };

  const sortField = (initialIndex: number, targetIndex: number) => {
    move(initialIndex, targetIndex);
  };

  const makeFieldOption = (id: SelectOption['value']): SelectOption => {
    const label = items.find((item) => item.value === id)?.label ?? '';
    return {
      label,
      value: id,
    };
  };

  const handleRemoveItem = (index: number) => (item: SelectOption['value']) => {
    remove(index);
    setSelectedItems((prev) => {
      const newItems = prev.filter((option) => option !== item);
      setSelectableItems(() => {
        return items.filter((item) => !newItems.includes(item.value));
      });
      return newItems;
    });
  };

  const addMultipleItems = (options: SelectOption['value'][]) => {
    const selected = options.map((option) => ({ id: option }));
    replace(selected as any);
    closeSelection();
  };

  const crearAllItems = () => {
    replace([]);
  };

  return {
    fields,
    isSelecting,
    selectableItems,
    addMultipleItems,
    handleRemoveItem,
    crearAllItems,
    makeFieldOption,
    openSelection,
    closeSelection,
    sortField,
  };
}
