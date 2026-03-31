'use client';

import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { routineFormSchema } from '../config/routine.schema';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { useRouter } from 'next/navigation';
import { RoutineNameField } from './fields/RoutineNameField';
import { RoutineDescriptionField } from './fields/RoutineDescriptionField';
import { RoutineCycleField } from './fields/RoutineCycleField';
import { RoutineInitialDateField } from './fields/RoutineInitialDateField';
import { RoutineDayField } from './fields/RoutineDayField';
import { useState } from 'react';
import { RoutineSessionPlanField } from './fields/RoutineSessionPlanField';
import { DEFAULT_WEEK_CYCLE_DAYS_DATA } from '../routine.ui.constants';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { RoutineActiveField } from './fields/RoutineActiveField';

type Props = {
  sessions: SelectOption[];
};

export function RoutineModalForm({ sessions }: Props) {
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
        <RoutineActiveField />
        <RoutineCycleField onChange={handleOnChange} />
        <RoutineDayField daysEnabled={daysEnabled} />
        <RoutineInitialDateField />
      </div>
      <RoutineSessionPlanField days={DEFAULT_WEEK_CYCLE_DAYS_DATA} sessions={sessions} />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
