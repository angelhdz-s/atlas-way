'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import type { SelectOption } from '@/presentation/modules/form/types';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import { useSessionForm } from '../hooks/useSessionForm';

export function SessionModalForm({
  exercises,
}: {
  exercises: SelectOption[];
}) {
  const router = useRouter();
  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const {
    register,
    isSubmitting,
    fields,
    handleSubmit,
    handleOnExercisesChange,
  } = useSessionForm({ onSuccess: handleSuccess });

  return (
    <ModalForm
      title="Plan the session"
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      <Label htmlFor="name" title="Name">
        <InputText
          {...register('name')}
          placeholder="Enter Session name"
        />
      </Label>
      <Label htmlFor="description" title="Description">
        <TextArea
          {...register('description')}
          placeholder="Day focused on arms training"
        />
      </Label>
      <MultipleSelectBox
        selectingTitle="Select exercises"
        label="Exercises"
        options={exercises}
        onOptionsChange={handleOnExercisesChange}
      >
        {fields.map((field, index) => (
          <input
            type="hidden"
            key={field.id}
            {...register(`exercises.${index}.id`)}
          />
        ))}
      </MultipleSelectBox>
      <ModalFormButtons
        onClose={handleClose}
        isPending={isSubmitting}
      />
    </ModalForm>
  );
}
