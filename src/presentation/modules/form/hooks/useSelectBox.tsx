'use client';

import { useState } from 'react';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { useLayer } from '@/presentation/globals/hooks/useLayer';

export function useSelectBox({
  options,
  onAdd,
  onClose,
  isOpen,
}: {
  options: SelectOption[];
  onAdd: (options: SelectOption['value'][]) => void;
  onClose: () => void;
  isOpen: boolean;
}) {
  const { ref } = useLayer({
    isOpen,
    onClose,
  });

  const [search, setSearch] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<SelectOption['value'][]>([]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleClose = () => {
    onClose?.();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectOption = (value: SelectOption['value']) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== value));
      return;
    }

    setSelectedOptions((prev) => {
      const items = new Set([...prev, value]);
      return [...items];
    });
  };

  const handleAddOptions = () => {
    onAdd(selectedOptions);
  };

  return {
    ref,
    search,
    selectedOptions,
    filteredOptions,
    handleClose,
    handleSearchChange,
    handleSelectOption,
    handleAddOptions,
  };
}
