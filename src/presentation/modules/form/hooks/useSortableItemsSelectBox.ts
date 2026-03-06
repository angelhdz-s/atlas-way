'use client';

import { useEffect, useRef, useState } from 'react';
import type { SelectOption, SortableSelectedItem } from '@/presentation/modules/form/types';

type Props = {
  items: SelectOption[];
  onItemsChange?: (items: SortableSelectedItem[]) => void;
};

export function useSortableItemsSelectBox({ items, onItemsChange }: Props) {
  const [selectedItems, setSelectedItems] = useState<SortableSelectedItem[]>([]);
  const currentItems = useRef(selectedItems);
  const [isSelecting, setIsSelecting] = useState(false);

  const nonSelectedItems: SelectOption[] = items.filter(
    (item) => !selectedItems.includes({ id: item.value })
  );

  const handleCloseItemsSelection = () => {
    setIsSelecting(false);
  };

  const handleOpenItemsSelection = () => {
    setIsSelecting(true);
  };

  const handleClearAllItems = () => {
    setSelectedItems([]);
  };

  const handleAddItems = (items: SortableSelectedItem[]) => {
    setSelectedItems((prev) => [...prev, ...items]);
    setIsSelecting(false);
  };

  const handleRemoveItem = (item: SortableSelectedItem) => {
    setSelectedItems((prev) => prev.filter((selectedItem) => selectedItem.id !== item.id));
  };

  useEffect(() => {
    if (currentItems.current === selectedItems) return;
    currentItems.current = selectedItems;
    onItemsChange?.(currentItems.current);
  }, [selectedItems, onItemsChange]);

  return {
    isSelecting,
    selectedItems,
    nonSelectedItems,
    handleCloseItemsSelection,
    handleOpenItemsSelection,
    handleClearAllItems,
    handleAddItems,
    handleRemoveItem,
  };
}
