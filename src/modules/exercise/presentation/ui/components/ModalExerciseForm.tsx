'use client';

import { createExerciseAction } from '../../exercise.actions';
import { ExerciseDescriptionField } from './fields/ExerciseDescriptionField';
import { ExerciseFormSchema } from '../schemas/exercise.schema';
import { ExerciseMusclesField } from './fields/ExerciseMusclesField';
import { ExerciseNameField } from './fields/ExerciseNameField';
import { ExerciseRepsField } from './fields/ExerciseRepsField';
import { ExerciseSetsField } from './fields/ExerciseSetsField';
import { ExerciseWeightField } from './fields/ExerciseWeightField';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconBarbell } from '@/presentation/globals/components/Icons';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { useRouter } from 'next/navigation';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { SelectOption } from '@/presentation/modules/form/form.types';

export function ModalExerciseForm({
  muscles,
  data,
}: {
  muscles: SelectOption[];
  data?: ExerciseDTO;
}) {
  const router = useRouter();

  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const config = {
    action: createExerciseAction,
    schema: ExerciseFormSchema,
    onSuccess: handleSuccess,
  };

  const muscleIds = data?.muscles.map((m) => m.id.toString()) ?? [];

  return (
    <ModalForm title="Build your exercise" config={config} onClose={handleClose}>
      <section className="space-y-4">
        <ExerciseNameField value={data?.name} />
        <ExerciseDescriptionField value={data?.description} />
      </section>
      <FormFieldSection Icon={IconBarbell} title="Metrics" className="flex items-start gap-4">
        <ExerciseSetsField value={data?.sets} />
        <ExerciseRepsField value={data?.reps} />
        <ExerciseWeightField value={data?.weight} />
      </FormFieldSection>
      <ExerciseMusclesField items={muscles} selectedItems={muscleIds} />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
