import { useState } from 'react';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { InputClasses } from '@/presentation/modules/form/constants/classes';
import type { InputTextProps } from '@/presentation/modules/form/form.types';

export function InputText(props: InputTextProps) {
  const { onChange, className, error, value, ...rest } = props;
  const [valueState, setValueState] = useState(value ?? '');

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setValueState(e.currentTarget.value);
  };

  return (
    <>
      <input
        {...rest}
        type="text"
        className={`${InputClasses} ${className}`}
        onChange={updateInput}
        value={valueState}
      />
      <ErrorMessage message={error} />
    </>
  );
}
