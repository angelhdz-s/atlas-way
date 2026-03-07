'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import type { SelectOption } from '@/presentation/modules/form/types';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useSessionForm } from '../hooks/useSessionForm';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconBarbell } from '@/presentation/globals/components/Icons';
import { useSortableInputItems } from '@/presentation/modules/form/hooks/useSortableInputItems';
import { SortableInputItems } from '@/presentation/modules/form/components/SortableInputItems';

export function SessionModalForm({ exercises }: { exercises: SelectOption[] }) {
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
    fields: exerciseFields,
    handleSubmit,
    handleOnExercisesChange,
    handleRemoveExercise,
    handleRemoveAllFields,
    handleMoveField: handleSortItem,
    errors,
  } = useSessionForm({ onSuccess: handleSuccess });

  const {
    nonSelectedItems,
    isSelecting,
    labelFields,
    handleAddItems,
    handleCloseItemsSelection,
    handleOpenItemsSelection,
    handleRemoveAllOptions,
    handleRemoveOption,
  } = useSortableInputItems({
    fields: exerciseFields,
    onRemoveAllFields: handleRemoveAllFields,
    onRemoveOption: handleRemoveExercise,
    onChange: handleOnExercisesChange,
    items: exercises,
  });

  return (
    <ModalForm title="Plan the session" onSubmit={handleSubmit} onClose={handleClose}>
      <Label htmlFor="name" title="Name">
        <InputText
          {...register('name')}
          placeholder="Enter Session name"
          error={errors.name?.message}
        />
      </Label>

      <Label htmlFor="description" title="Description">
        <TextArea
          {...register('description')}
          placeholder="Day focused on arms training"
          error={errors.description?.message}
        />
      </Label>

      <FormFieldSection Icon={IconBarbell} title="Exercises" className="space-y-1">
        <SortableInputItems
          dynamicInputProps={{ register, name: 'exercises' }}
          fields={labelFields}
          handleAddItems={handleAddItems}
          handleClearAllItems={handleRemoveAllOptions}
          handleCloseItemsSelection={handleCloseItemsSelection}
          handleOpenItemsSelection={handleOpenItemsSelection}
          handleRemoveItem={handleRemoveOption}
          handleSortItem={handleSortItem}
          isSelecting={isSelecting}
          nonSelectedItems={nonSelectedItems}
        />
        <span className="fg-red-600 font-medium">{errors.exercises?.message}</span>
      </FormFieldSection>

      <ModalFormButtons onClose={handleClose} isPending={isSubmitting} />
    </ModalForm>
  );
}
