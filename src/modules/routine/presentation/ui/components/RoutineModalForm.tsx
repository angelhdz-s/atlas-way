'use client';

import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { routineFormSchema } from '../config/routine-schema';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { useRouter } from 'next/navigation';
import { RoutineNameField } from './fields/RoutineNameField';
import { RoutineDescriptionField } from './fields/RoutineDescriptionField';
import { RoutineDayCycleField } from './fields/RoutineDayCycleField';
import { RoutineInitialDateField } from './fields/RoutineInitialDateField';

export function RoutineModalForm() {
  const router = useRouter();

  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <ModalForm
      config={{
        action: createRoutineAction,
        onSuccess: handleSuccess,
        schema: routineFormSchema,
      }}
      onClose={handleClose}
      title="Design your routine"
    >
      <section className="flex flex-col gap-2">
        <RoutineNameField />
        <RoutineDescriptionField />
        <RoutineDayCycleField />
        <RoutineInitialDateField />
      </section>
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
