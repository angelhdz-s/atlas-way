import type { FieldArrayWithId } from 'react-hook-form';

export type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  value?: string;
};

export type InputNumberProps = InputTextProps & {
  min?: string | number;
  max?: string | number;
  value?: string | number;
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
