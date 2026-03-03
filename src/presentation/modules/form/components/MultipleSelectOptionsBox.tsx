'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { useMultipleSelectOptionsBox } from '@/presentation/modules/form/hooks/useMultipleSelectOptionsBox';
import type { SelectOption } from '@/presentation/modules/form/types';
import {
  IconCirclePlus,
  IconSearch,
} from '@/presentation/globals/components/Icons';
import { VariantButton } from '../../button/components/VariantButton';

function SelectOptionBox({
  option,
  isSelected = false,
  onSelect,
}: {
  option: SelectOption;
  isSelected?: boolean;
  onSelect: (value: SelectOption) => void;
}) {
  const isActiveClass = isSelected
    ? 'border-complete fg-complete font-medium'
    : 'border-subtle/20';
  return (
    <label
      className={`hover:border-complete hover:fg-complete w-fit cursor-pointer rounded-full border px-3 py-1 leading-1 ${isActiveClass}`}
    >
      <span className="text-sm">{option.label}</span>
      <input
        className="hidden"
        type="checkbox"
        onChange={() => onSelect(option)}
      />
    </label>
  );
}

export function MultipleSelectOptionsBox({
  title,
  options,
  onAdd,
  onClose,
}: {
  title: string;
  options: SelectOption[];
  onAdd: (options: SelectOption[]) => void;
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
  } = useMultipleSelectOptionsBox({
    options,
    onAdd,
    onClose,
  });

  return (
    <div className="bg-middle border-subtle/20 flex w-120 flex-col gap-2 rounded-lg border p-4">
      <header className="flex flex-col gap-1">
        <h5 className="mb-2 text-xl font-medium">
          {title}
        </h5>
        <label className="bg-back/30 mb-2 flex w-full items-center gap-2 rounded-full px-4 py-2 text-base font-light outline-none">
          <IconSearch
            className="fg-muted size-5"
            strokeWidth="2"
          />
          <input
            type="search"
            className="w-full appearance-none outline-none"
            value={search}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </label>
      </header>
      <Box className="scrollbar-y flex h-64 flex-wrap content-start gap-2 rounded-lg p-4 pb-8">
        {filteredOptions.map((option) => (
          <SelectOptionBox
            key={option.value}
            option={option}
            onSelect={handleSelectOption}
            isSelected={selectedOptions.includes(option)}
          />
        ))}
      </Box>
      <footer className="flex gap-2">
        <VariantButton
          color="primary"
          onClick={handleAddOptions}
        >
          <IconCirclePlus
            className="size-5"
            strokeWidth="2"
          />
          Add
        </VariantButton>
        <VariantButton color="simple" onClick={handleClose}>
          Cancel
        </VariantButton>
      </footer>
    </div>
  );
}
