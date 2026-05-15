import { useEffect, useState } from 'react';

type DropdownListValueType = {
  label: string;
  value: string | number;
};
export type DropdownListProps = {
  selectedValue?: DropdownListValueType['value'] | undefined;
  className?: string;
  values: DropdownListValueType[];
  onChange?: ((e: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
};

export function DropdownList({
  selectedValue = '',
  className = '',
  values,
  onChange,
}: DropdownListProps) {
  const [selectedOption, setSelectedOption] =
    useState<DropdownListValueType['value']>(selectedValue);

  const updateOptionSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
    setSelectedOption(e.currentTarget.value);
  };

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  return (
    <select
      className={className}
      onChange={updateOptionSelected}
      value={selectedOption}
      style={{
        backgroundColor: 'var(--color-fill-back)',
        borderColor: 'var(--color-bd-strong)',
      }}
    >
      {values.length === 0 && (
        <option value="" disabled>
          No options found
        </option>
      )}
      {values.map((value) => (
        <option key={value.value} value={value.value} className="bg-fill-back">
          {value.label}
        </option>
      ))}
    </select>
  );
}
