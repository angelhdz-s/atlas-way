import { useState } from 'react';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { TextAreaClasses } from '@/presentation/modules/form/constants/classes';
import type { TextAreaProps } from '@/presentation/modules/form/form.types';

export function TextArea(props: TextAreaProps) {
  const { className, error, value, onChange, ...rest } = props;
  const [stateValue, setStateValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    setStateValue(e.currentTarget.value);
  };

  return (
    <>
      <textarea
        {...rest}
        className={`${TextAreaClasses} ${className}`}
        onChange={handleChange}
        value={stateValue}
      />
      <ErrorMessage message={error} />
    </>
  );
}
