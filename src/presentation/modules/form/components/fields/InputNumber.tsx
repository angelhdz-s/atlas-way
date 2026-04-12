import { useState } from 'react';
import { InputClasses } from '@/presentation/modules/form/constants/classes';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import type { InputNumberProps } from '@/presentation/modules/form/form.types';

export function InputNumber(props: InputNumberProps) {
  const { onChange, value, error, className, ...rest } = props;
  const [currentValue, setCurrentValue] = useState(value ?? '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    const val = e.target.value;
    if (val !== currentValue) setCurrentValue(val);
  };
  return (
    <>
      <input
        {...rest}
        type="number"
        className={`${InputClasses} ${className}`}
        value={currentValue}
        onChange={handleChange}
      />
      <ErrorMessage message={error} />
    </>
  );
}
