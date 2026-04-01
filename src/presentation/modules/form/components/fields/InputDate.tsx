import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { InputClasses } from '@/presentation/modules/form/constants/classes';
import { useState } from 'react';
import type { InputDateProps } from '../../form.types';

export function InputDate(props: InputDateProps) {
  const { className, onChange, value, error, ...rest } = props;
  const [date, setDate] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    const newDate = e.currentTarget.value;
    setDate(newDate);
  };
  return (
    <>
      <input
        {...rest}
        type="date"
        className={`${InputClasses} ${className}`}
        onChange={handleChange}
        value={date}
      />
      {<ErrorMessage message={error} />}
    </>
  );
}
