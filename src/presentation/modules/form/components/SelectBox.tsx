'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { IconSearch } from '@/presentation/globals/components/icons/outline/IconSearch';
import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import { Button } from '@/presentation/modules/button/components/Button';
import { useSelectBox } from '@/presentation/modules/form/hooks/useSelectBox';
import { SelectBoxOption } from '@/presentation/modules/form/components/SelectBoxOption';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';

export function SelectBox({
  title,
  options,
  onAdd,
  onClose,
  isOpen,
}: {
  title: string;
  options: SelectOption[];
  onAdd: (options: SelectOption['value'][]) => void;
  onClose: () => void;
  isOpen: boolean;
}) {
  const {
    ref,
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
    isOpen,
  });

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={ref}
        className="bg-fill-base border-subtle/20 fixed inset-0 z-10 m-auto flex size-fit w-160 flex-col gap-2 rounded-lg border p-6"
      >
        <header className="flex items-center justify-between gap-2">
          <h5 className="text-fg-strong truncate text-xl font-medium">{title}</h5>
          <Button variantConfig={{ color: 'simple', type: 'square' }} onClick={onClose}>
            <IconXMark />
          </Button>
        </header>
        <div>
          <label className="hover:outline-bd-default bg-fill-back mb-2 flex w-full items-center gap-2 rounded-lg px-4 py-2 text-base font-light hover:outline-1">
            <IconSearch className="text-fg-subtle size-5" strokeWidth="2" />
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
          <Button
            type="button"
            variantConfig={{
              color: 'simple',
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variantConfig={{
              color: 'primary',
            }}
            onClick={handleAddOptions}
          >
            Add
          </Button>
        </footer>
      </div>
      <TooltipBackdrop />
    </>
  );
}
