import { useState } from 'react';
import { InputClasses } from '../../constants/classes';
import type { InputNumberProps } from '../../form.types';
import { ErrorMessage } from '../ErrorMessage';

export function InputNumber(props: InputNumberProps) {
  const { onChange, value, error, className, ...rest } = props;
  const [currentValue, setCurrentValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
