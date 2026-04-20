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
    ? 'border-complete fg-complete font-medium light:fg-green-700 light:border-green-600'
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
          'outline-focus bg-middle hover:border-complete hover:fg-complete light:hover:fg-green-900 w-fit cursor-pointer rounded-lg border px-3 py-1 text-sm peer-focus:outline-2',
          isActiveClass
        )}
      >
        {option.label}
      </div>
    </label>
  );
}
