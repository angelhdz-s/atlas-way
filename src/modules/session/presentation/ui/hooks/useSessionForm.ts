'use client';

import { useFieldArray } from 'react-hook-form';
import { useFormHook } from '@/presentation/modules/form/hooks/useFormHook';
import { sessionFormSchema } from '../config/session-schema';
import { createSessionAction } from '../../session.actions';

export function useSessionForm({ onSuccess }: { onSuccess?: () => void } = {}) {
  const { register, isSubmitting, handleSubmit, errors, control } = useFormHook({
    action: createSessionAction,
    schema: sessionFormSchema,
    onSuccess: onSuccess,
  });

  const { fields, replace, append, remove, update, move } = useFieldArray({
    control,
    name: 'exercises',
    keyName: 'fieldId',
  });

  const handleRemoveAllFields = () => {
    replace([]);
  };

  const handleOnExercisesChange = (items: { id: string }[]) => {
    replace(items);
  };

  const handleAddNewExercise = (id: string) => {
    append({ id });
  };

  const handleRemoveExercise = (index: number) => {
    remove(index);
  };

  const handleUpdateExercise = (index: number, id: string) => {
    update(index, { id });
  };

  const handleMoveField = (oldIndex: number, newIndex: number) => {
    move(oldIndex, newIndex);
  };

  return {
    isSubmitting,
    register,
    errors,
    handleSubmit,
    fields,
    handleOnExercisesChange,
    handleAddNewExercise,
    handleRemoveExercise,
    handleUpdateExercise,
    handleRemoveAllFields,
    handleMoveField,
  };
}
