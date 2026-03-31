'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { IconSearch, IconXMark } from '@/presentation/globals/components/Icons';
import { VariantButton } from '../../button/components/VariantButton';
import { useSelectBox } from '../hooks/useSelectBox';
import { SelectBoxOption } from './SelectBoxOption';

export function SelectBox({
  title,
  options,
  onAdd,
  onClose,
}: {
  title: string;
  options: SelectOption[];
  onAdd: (options: SelectOption['value'][]) => void;
  onClose?: () => void;
}) {
  const {
    filteredOptions,
    handleClose,
    handleAddOptions,
    handleSearchChange,
    handleSelectOption,
    search,
    selectedOptions,
  } = useSelectBox({
    options,
    onAdd,
    onClose,
  });

  return (
    <div className="bg-middle border-subtle/20 flex w-160 flex-col gap-2 rounded-lg border p-6">
      <header className="flex items-center justify-between gap-2">
        <h5 className="fg-strong truncate text-xl font-medium">{title}</h5>
        <VariantButton variantConfig={{ color: 'simple', type: 'square' }} onClick={onClose}>
          <IconXMark />
        </VariantButton>
      </header>
      <div>
        <label className="hover:outline-bd-default bg-back mb-2 flex w-full items-center gap-2 rounded-lg px-4 py-2 text-base font-light hover:outline-1">
          <IconSearch className="fg-muted size-5" strokeWidth="2" />
          <input
            type="search"
            className="w-full appearance-none outline-none"
            value={search}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </label>
      </div>
      <Box className="scrollbar-y flex h-90 flex-wrap content-start gap-2 rounded-lg p-4 pb-8">
        {filteredOptions.map((option) => (
          <SelectBoxOption
            key={option.value}
            option={option}
            onSelect={handleSelectOption}
            isSelected={selectedOptions.includes(option.value)}
          />
        ))}
      </Box>
      <footer className="mt-4 flex justify-end">
        <VariantButton
          type="button"
          variantConfig={{
            color: 'simple',
          }}
          onClick={handleClose}
        >
          Cancel
        </VariantButton>
        <VariantButton
          type="button"
          variantConfig={{
            color: 'primary',
          }}
          onClick={handleAddOptions}
        >
          Add
        </VariantButton>
      </footer>
    </div>
  );
}
