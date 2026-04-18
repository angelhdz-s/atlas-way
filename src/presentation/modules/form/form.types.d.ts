import type { FieldArrayWithId } from 'react-hook-form';

export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputTextProps = InputProps & {
  error?: string;
  value?: string;
};

export type InputNumberProps = Omit<InputTextProps, 'value'> & {
  value?: string | number;
};

export type InputDateProps = Omit<InputTextProps, 'value'> & {
  value?: string;
};

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
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

export type DnDFormFieldItemDroppableData = {
  id: string;
  type: 'droppable';
  index: number;
  droppedId: string | undefined;
};

export type DnDFormFieldItemDraggableData =
  | {
      id: string;
      type: 'draggable';
      containerId: undefined;
    }
  | {
      id: string;
      type: 'draggable';
      containerId: string;
      containerIndex: number;
    };

export type DnDFormFieldItemData = DnDFormFieldItemDroppableData | DnDFormFieldItemDraggableData;
