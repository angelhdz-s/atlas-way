'use client';

import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { DEFAULT_WEEK_CYCLE_DAYS_DATA } from '../routine.ui.constants';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { RoutineActiveField } from './fields/RoutineActiveField';
import { RoutineCycleField } from './fields/RoutineCycleField';
import { RoutineDayField } from './fields/RoutineDayField';
import { RoutineDescriptionField } from './fields/RoutineDescriptionField';
import { routineFormSchema } from '../config/routine.schema';
import { RoutineInitialDateField } from './fields/RoutineInitialDateField';
import { RoutineNameField } from './fields/RoutineNameField';
import { RoutineSessionPlanField } from './fields/RoutineSessionPlanField';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import type { RoutineForm } from '../config/routine.schema';
import type { SelectOption } from '@/presentation/modules/form/form.types';

type Props = {
  sessions: SelectOption[];
  data?: RoutineDTO;
};

export function RoutineModalForm({ sessions, data }: Props) {
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

  const routineDays: RoutineForm['sessions'] =
    data?.routineDays.map((r) => ({
      day: r.day,
      dayName: r.name,
      sessionId: r.session?.id ?? null,
    })) ?? [];

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
      <RoutineNameField value={data?.name} />
      <RoutineDescriptionField value={data?.description} />
      <div className="flex gap-4">
        <RoutineActiveField value={data?.active} />
        <RoutineCycleField onChange={handleOnChange} />
        <RoutineDayField daysEnabled={daysEnabled} />
        <RoutineInitialDateField value={data?.initialDate} />
      </div>
      <RoutineSessionPlanField
        days={DEFAULT_WEEK_CYCLE_DAYS_DATA}
        sessions={sessions}
        routineDays={routineDays}
      />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
