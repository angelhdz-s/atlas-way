import type { ArrayField, SelectOption, SortableSelectedItem } from '../types';
import { useSortableItemsSelectBox } from './useSortableItemsSelectBox';
import { isSortable } from '@dnd-kit/react/sortable';

type Props = {
  fields: ArrayField[];
  items: SelectOption[];
  onChange: (selected: SortableSelectedItem[]) => void;
  onRemoveAllFields: () => void;
  onRemoveOption: (index: number) => void;
};

/**
 * Custom hook for draggable and sortabble select list of items
 */

export function useSortableInputItems({
  fields,
  onChange,
  items,
  onRemoveAllFields,
  onRemoveOption,
}: Props) {
  const labelFields = fields.map((field) => ({
    id: field.id,
    fieldId: field.fieldId,
    label: items.find((item) => item.value === field.id)?.label ?? '',
  }));

  const {
    isSelecting,
    nonSelectedItems,
    selectedItems,
    handleClearAllItems,
    handleOpenItemsSelection,
    handleCloseItemsSelection,
    handleAddItems,
    handleRemoveItem,
  } = useSortableItemsSelectBox({
    items,
    onItemsChange: onChange,
  });

  const handleRemoveAllOptions = () => {
    handleClearAllItems();
    onRemoveAllFields();
  };

  const handleRemoveOption = (id: string, index: number) => {
    onRemoveOption(index);
    handleRemoveItem({ id });
  };

  return {
    selectedItems,
    nonSelectedItems,
    isSelecting,
    labelFields,
    handleAddItems,
    handleOpenItemsSelection,
    handleCloseItemsSelection,
    handleRemoveAllOptions,
    handleRemoveOption,
  };
}
