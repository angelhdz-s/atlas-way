'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import type { SelectOption } from '@/presentation/modules/form/types';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconBarbell } from '@/presentation/globals/components/Icons';
import { ExerciseFormSchema } from '../schemas/exercise.schema';
import { ExerciseMusclesField } from './fields/ExerciseMusclesField';
import { createExerciseAction } from '../../exercise.actions';
import { ExerciseNameField } from './fields/ExerciseNameField';
import { ExerciseDescriptionField } from './fields/ExerciseDescriptionField';
import { ExerciseSetsField } from './fields/ExerciseSetsField';
import { ExerciseRepsField } from './fields/ExerciseRepsField';
import { ExerciseWeightField } from './fields/ExerciseWeightField';

export function ModalExerciseForm({ muscles }: { muscles: SelectOption[] }) {
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

  return (
    <ModalForm title="Build your exercise" config={config} onClose={handleClose}>
      <section className="space-y-4">
        <ExerciseNameField />
        <ExerciseDescriptionField />
      </section>
      <FormFieldSection Icon={IconBarbell} title="Metrics" className="flex items-start gap-4">
        <ExerciseSetsField />
        <ExerciseRepsField />
        <ExerciseWeightField />
      </FormFieldSection>
      <ExerciseMusclesField items={muscles} />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
