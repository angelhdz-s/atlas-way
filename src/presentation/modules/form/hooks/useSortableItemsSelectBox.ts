'use client';

import { useEffect, useRef, useState } from 'react';
import type { SelectOption } from '@/presentation/modules/form/types';

type Props = {
  items: SelectOption[];
  onItemsChange?: (items: string[]) => void;
};

export function useSortableItemsSelectBox({ items, onItemsChange }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const currentItems = useRef(selectedItems);
  const [isSelecting, setIsSelecting] = useState(false);

  const nonSelectedItems: SelectOption[] = items.filter(
    (item) => !selectedItems.includes(item.value)
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

  const handleAddItems = (items: string[]) => {
    setSelectedItems((prev) => {
      const selected = new Set([...prev, ...items]);
      return [...selected];
    });
    setIsSelecting(false);
  };

  const handleRemoveItem = (item: string) => {
    setSelectedItems((prev) => prev.filter((selectedItem) => selectedItem !== item));
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
