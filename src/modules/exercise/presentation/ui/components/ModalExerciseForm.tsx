'use client';

import { useRouter } from 'next/navigation';
import { useExerciseForm } from '@/modules/exercise/presentation/ui/hooks/useExerciseForm';
import { InputNumber } from '@/presentation/modules/form/components/InputNumber';
import { InputText } from '@/presentation/modules/form/components/InputText';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import { ModalForm } from '@/presentation/modules/form/components/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/ModalFormButtons';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import { TextArea } from '@/presentation/modules/form/components/TextArea';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import type { SelectOption } from '@/presentation/modules/form/types';

export function ModalExerciseForm({
  title,
  muscles,
}: {
  title: string;
  muscles: SelectOption[];
}) {
  const router = useRouter();

  const handleSuccess = () => {
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
    <ModalForm title={title} onSubmit={handleSubmit}>
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
      <section className="flex items-start gap-2">
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
      </section>
      <section>
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
      </section>
      <footer className="flex gap-2 *:w-full">
        <ModalFormButtons isPending={isSubmitting} />
      </footer>
    </ModalForm>
  );
}
