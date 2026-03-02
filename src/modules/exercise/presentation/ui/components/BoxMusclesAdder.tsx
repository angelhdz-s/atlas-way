import { useState } from 'react';
import { Box } from '@/presentation/modules/form/components/Box';
import type { SelectOption } from '@/presentation/modules/form/types';

function BoxOption({
  option,
  isSelected = false,
  onSelect,
}: {
  option: SelectOption;
  isSelected?: boolean;
  onSelect: (value: SelectOption) => void;
}) {
  const isActiveClass = isSelected
    ? 'bg-primary fg-white'
    : '';
  return (
    <label
      className={`border-bd-muted w-fit rounded-full border px-3 py-1 leading-1 ${isActiveClass}`}
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

export function BoxMusclesAdder({
  options,
  onAdd,
}: {
  options: SelectOption[];
  onAdd: (options: SelectOption[]) => void;
}) {
  const [search, setSearch] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<
    SelectOption[]
  >([]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search)
  );

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  const handleSelectOption = (value: SelectOption) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prev) =>
        prev.filter((selected) => selected !== value)
      );
    } else {
      setSelectedOptions((prev) => [...prev, value]);
    }
  };

  const handleAddOptions = () => {
    onAdd(selectedOptions);
  };

  return (
    <div className="border-subtle/20 w-100 rounded-lg border bg-zinc-900 p-4">
      <header>
        <h2 className="mb-2 text-lg font-medium">
          Select Muscles
        </h2>
      </header>
      <input
        className="bg-back/30 mb-2 w-full rounded-full px-4 py-1 text-base font-light outline-none"
        type="search"
        value={search}
        placeholder="Search muscles..."
        onChange={handleSearchChange}
      />
      <Box className="scrollbar-y flex h-64 flex-wrap content-start gap-2 rounded-lg pb-8">
        {filteredOptions.map((option) => (
          <BoxOption
            key={option.value}
            option={option}
            onSelect={handleSelectOption}
            isSelected={selectedOptions.includes(option)}
          />
        ))}
      </Box>
      <footer className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handleAddOptions}
          className="bg-primary fg-white hover:bg-primary/90 flex-1 rounded px-4 py-2"
        >
          Add
        </button>
      </footer>
    </div>
  );
}
