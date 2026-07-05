'use client';

import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import type { RoutineForm } from '@/modules/routine/presentation/ui/config/routine.schema';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { DEFAULT_WEEK_CYCLE_DAYS_DATA } from '@/modules/routine/presentation/ui/routine.ui.constants';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { RoutineActiveField } from '@/modules/routine/presentation/ui/components/fields/RoutineActiveField';
import { RoutineCycleField } from '@/modules/routine/presentation/ui/components/fields/RoutineCycleField';
import { RoutineDayField } from '@/modules/routine/presentation/ui/components/fields/RoutineDayField';
import { RoutineDescriptionField } from '@/modules/routine/presentation/ui/components/fields/RoutineDescriptionField';
import { RoutineInitialDateField } from '@/modules/routine/presentation/ui/components/fields/RoutineInitialDateField';
import { RoutineNameField } from '@/modules/routine/presentation/ui/components/fields/RoutineNameField';
import { RoutineSessionPlanField } from '@/modules/routine/presentation/ui/components/fields/RoutineSessionPlanField';
import { routineFormSchema } from '@/modules/routine/presentation/ui/config/routine.schema';

type Props = {
  sessions: SelectOption[];
  data?: RoutineDTO;
};

export function RoutineModalForm({ sessions, data }: Props) {
  const { back } = useRouter();

  const handleSuccess = () => {
    back();
  };

  const handleClose = () => {
    back();
  };

  const [daysEnabled, setDaysEnabled] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === 'custom' && daysEnabled) return;
    setDaysEnabled(value === 'custom');
  };

  const plan: RoutineForm['sessions'] =
    data?.plan.map((r) => ({
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
        routineDays={plan}
      />
      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
