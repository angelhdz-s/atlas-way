'use client';

import { useRouter } from 'next/navigation';
import { useExerciseForm } from '@/modules/exercise/presentation/ui/hooks/useExerciseForm';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import type { SelectOption } from '@/presentation/modules/form/types';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import {
  IconBarbell,
  IconMan,
} from '@/presentation/globals/components/Icons';

export function ModalExerciseForm({
  muscles,
}: {
  muscles: SelectOption[];
}) {
  const router = useRouter();

  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const {
    isSubmitting,
    errors,
    fields,
    handleOnMusclesChange,
    handleSubmit,
    register,
  } = useExerciseForm({ onSuccess: handleSuccess });

  return (
    <ModalForm
      title="Build your exercise"
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      <section className="space-y-4">
        <Label htmlFor="exercise.name" title="Name">
          <InputText
            {...register('exercise.name')}
            error={errors.exercise?.name?.message}
            placeholder="Bench Press"
          />
        </Label>
        <Label
          htmlFor="exercise.description"
          title="Description"
        >
          <TextArea
            {...register('exercise.description')}
            error={errors.exercise?.description?.message}
            placeholder="A compound exercise that targets the chest, shoulders, and triceps."
          />
        </Label>
      </section>
      <FormFieldSection
        Icon={IconBarbell}
        title="Metrics"
        className="flex items-start gap-4"
      >
        <Label htmlFor="initialStats.sets" title="Sets">
          <InputNumber
            {...register(
              'initialStats.sets',
              inputNumberConfig
            )}
            error={errors.initialStats?.sets?.message}
          />
        </Label>
        <Label htmlFor="initialStats.reps" title="Reps">
          <InputNumber
            {...register(
              'initialStats.reps',
              inputNumberConfig
            )}
            error={errors.initialStats?.reps?.message}
          />
        </Label>
        <Label
          htmlFor="initialStats.weight"
          title="Weight (lbs)"
        >
          <InputNumber
            {...register(
              'initialStats.weight',
              inputNumberConfig
            )}
            error={errors.initialStats?.weight?.message}
          />
        </Label>
      </FormFieldSection>
      <FormFieldSection
        Icon={IconMan}
        title="To train"
        className=""
      >
        <MultipleSelectBox
          label="Muscles"
          selectingTitle="Select muscles"
          options={muscles}
          error={errors.muscles?.message}
          onOptionsChange={handleOnMusclesChange}
        >
          {fields.map((field, index) => (
            <input
              type="hidden"
              key={field.id}
              {...register(`muscles.${index}.id`)}
            ></input>
          ))}
        </MultipleSelectBox>
      </FormFieldSection>
      <ModalFormButtons
        onClose={handleClose}
        isPending={isSubmitting}
      />
    </ModalForm>
  );
}
