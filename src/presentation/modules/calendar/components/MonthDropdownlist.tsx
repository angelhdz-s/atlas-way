import { MONTH_NAMES } from '@/presentation/globals/constants/date';
import { DateDropdownlist } from '@/presentation/modules/calendar/components/DateDropdrownList';

export function MonthDropdownlist({
  className = '',
  selectedValue,
  onChange,
}: {
  className?: string;
  selectedValue?: number | undefined;
  onChange?: ((e: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
}) {
  const monthOptions = MONTH_NAMES.map((month) => ({
    value: month.month,
    label: month.name,
  }));
  return (
    <DateDropdownlist
      values={monthOptions}
      className={className}
      selectedValue={selectedValue}
      onChange={onChange}
    />
  );
}
