import type { SelectOption } from '@/presentation/modules/form/form.types';

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
    <label
      className={`bg-middle hover:border-complete hover:fg-complete light:hover:fg-green-900 w-fit cursor-pointer rounded-lg border px-3 py-1 ${isActiveClass}`}
    >
      <span className="text-sm">{option.label}</span>
      <input className="hidden" type="checkbox" onChange={() => onSelect(option.value)} />
    </label>
  );
}
