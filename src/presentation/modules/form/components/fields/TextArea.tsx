import { ErrorMessage } from '../ErrorMessage';
import { TextAreaClasses } from '../../constants/classes';
import { useState } from 'react';
import type { TextAreaProps } from '../../form.types';

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
