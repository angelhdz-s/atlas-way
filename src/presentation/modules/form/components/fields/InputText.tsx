import { ErrorMessage } from '../ErrorMessage';
import { InputClasses } from '../../constants/classes';
import { useState } from 'react';
import type { InputTextProps } from '../../types';

export function InputText(props: InputTextProps) {
  const { onChange, className, error, value, ...rest } = props;
  const [valueState, setValueState] = useState(value ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setValueState(e.currentTarget.value);
  };

  return (
    <>
      <input
        {...rest}
        type="text"
        className={`${InputClasses} ${className}`}
        onChange={handleChange}
        value={valueState}
      />
      <ErrorMessage message={error} />
    </>
  );
}
