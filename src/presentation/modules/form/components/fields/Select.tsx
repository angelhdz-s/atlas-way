import { InputClasses } from '@/presentation/modules/form/constants/classes';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import styles from '@/presentation/modules/form/components/fields/Select.module.css';
import type { SelectOption, SelectOptionValue } from '@/presentation/modules/form/form.types';

type multipleSelectedType =
  | {
      multiple?: false | undefined;
      selected?: SelectOptionValue;
    }
  | {
      multiple: true;
      selected?: SelectOptionValue[];
    };

type SelectProps = {
  ref?: React.Ref<HTMLSelectElement>;
  className?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} & multipleSelectedType;

function selectedValue(multiple: boolean, selected?: SelectOptionValue | SelectOptionValue[]) {
  if (multiple) {
    if (selected?.length === 0) return undefined;
    return selected as SelectOptionValue[];
  }
  return selected as SelectOptionValue;
}

export function Select({
  options,
  name,
  className = '',
  multiple,
  disabled,
  selected,
  onChange,
  error,
  ...props
}: SelectProps) {
  const defaultValue = selected ? selectedValue(multiple ?? false, selected) : undefined;

  return (
    <>
      <select
        name={name}
        className={`${InputClasses} appearance-none ${styles.select} ${className}`}
        multiple={multiple}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
      >
        {options.length < 1 && <option disabled>No options found</option>}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-middle focus:bg-back hover:bg-back"
          >
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage message={error} />
    </>
  );
}
