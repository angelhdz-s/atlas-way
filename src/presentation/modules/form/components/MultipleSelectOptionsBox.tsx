'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { useMultipleSelectOptionsBox } from '@/presentation/modules/form/hooks/useMultipleSelectOptionsBox';
import type { SelectOption } from '@/presentation/modules/form/types';
import { IconSearch } from '@/presentation/globals/components/Icons';
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
    ? 'border-complete fg-complete font-medium light:fg-green-700 light:border-green-600'
    : 'border-subtle/20';
  return (
    <label
      className={`bg-middle hover:border-complete hover:fg-complete light:hover:fg-green-900 w-fit cursor-pointer rounded-lg border px-3 py-1 ${isActiveClass}`}
    >
      <span className="text-sm">{option.label}</span>
      <input className="hidden" type="checkbox" onChange={() => onSelect(option)} />
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
    <div className="bg-middle border-subtle/20 flex w-160 flex-col gap-2 rounded-lg border p-6">
      <header className="flex flex-col gap-2">
        <h5 className="mb-2 text-xl font-medium">{title}</h5>
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
      </header>
      <Box className="scrollbar-y flex h-90 flex-wrap content-start gap-2 rounded-lg p-4 pb-8">
        {filteredOptions.map((option) => (
          <SelectOptionBox
            key={option.value}
            option={option}
            onSelect={handleSelectOption}
            isSelected={selectedOptions.includes(option)}
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
