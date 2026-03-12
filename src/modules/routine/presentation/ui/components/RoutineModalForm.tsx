'use client';

import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { routineFormSchema } from '../config/routine-schema';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { useRouter } from 'next/navigation';
import { RoutineNameField } from './fields/RoutineNameField';
import { RoutineDescriptionField } from './fields/RoutineDescriptionField';
import { RoutineCycleField } from './fields/RoutineCycleField';
import { RoutineInitialDateField } from './fields/RoutineInitialDateField';
import { RoutineDayField } from './fields/RoutineDayField';
import { useState } from 'react';
import { RoutineSessionPlanField } from './fields/RoutineSessionPlanField';

export function RoutineModalForm() {
  const router = useRouter();

  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const [daysEnabled, setDaysEnabled] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === 'custom' && daysEnabled) return;
    setDaysEnabled(value === 'custom');
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
      <RoutineNameField />
      <RoutineDescriptionField />
      <div className="flex gap-4">
        <RoutineInitialDateField />
        <RoutineCycleField onChange={handleOnChange} />
        <RoutineDayField daysEnabled={daysEnabled} />
      </div>
      <RoutineSessionPlanField />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
