import type { FieldArrayWithId } from 'react-hook-form';

export type InputTextProps = {
  className?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
};

export type InputNumberProps = InputTextProps & {
  min?: string | number;
  max?: string | number;
  value?: string | number;
};

export type TextAreaProps = InputTextProps & {
  rows?: number;
};

export type SelectOptionValue = string;

export type SelectOption = {
  label: string;
  value: SelectOptionValue;
};

export type ArrayField = FieldArrayWithId<FieldValues> & {
  fieldId: string;
};

export type ArrayFieldWithLabel = FieldArrayWithId<FieldValues> & {
  fieldId: string;
  label: string;
};

export type SortableSelectedItem = { id: string };

export type IdArrayField = { id: string }[];
