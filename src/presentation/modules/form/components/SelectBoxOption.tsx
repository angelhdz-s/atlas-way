import type { SelectOption } from '@/presentation/modules/form/form.types';
import { twMerge } from 'tailwind-merge';

export function SelectBoxOption({
  option,
  isSelected = false,
  onSelect,
}: {
  option: SelectOption;
  isSelected?: boolean;
  onSelect: (value: SelectOption['value']) => void;
}) {
  const isActiveClass = isSelected
    ? 'border-success text-success font-medium light:text-green-700 light:border-green-600'
    : 'border-subtle/20';
  return (
    <label className="relative">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onSelect(option.value)}
        className="peer absolute size-0 opacity-0"
        readOnly
      />
      <div
        className={twMerge(
          'outline-focus bg-fill-base hover:border-success hover:text-success light:hover:text-green-900 w-fit cursor-pointer rounded-lg border px-3 py-1 text-sm peer-focus:outline-2',
          isActiveClass
        )}
      >
        {option.label}
      </div>
    </label>
  );
}
