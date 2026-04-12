import styles from '@/presentation/modules/calendar/components/DateDropdownList.module.css';
import {
  DropdownList,
  type DropdownListProps,
} from '@/presentation/globals/components/DropdownList';

export function DateDropdownlist({
  className = '',
  values,
  selectedValue,
  onChange,
}: DropdownListProps) {
  return (
    <DropdownList
      values={values}
      className={`rounded-0 text-default/50 px-2 py-1 text-xs font-light ${styles.select} ${className} outline-none!`}
      selectedValue={selectedValue}
      onChange={onChange}
    />
  );
}
