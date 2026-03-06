'use client';

import { useState } from 'react';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label, LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { routineFormSchema } from '../config/routine-schema';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { daysOptions } from '../config/form';
import { useFormHook } from '@/presentation/modules/form/hooks/useFormHook';
import { InputDate } from '@/presentation/modules/form/components/fields/InputDate';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import { useRouter } from 'next/navigation';

export function RoutineModalForm() {
  const router = useRouter();

  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const { register, handleSubmit, errors, isSubmitting } = useFormHook({
    schema: routineFormSchema,
    action: createRoutineAction,
    onSuccess: handleSuccess,
  });
  const [daysEnabled, setDaysEnabled] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === 'custom' && daysEnabled) return;
    setDaysEnabled(value === 'custom');
  };

  return (
    <ModalForm onClose={handleClose} title="Design your routine" onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2">
        <Label htmlFor="name" title="Name">
          <InputText
            {...register('name')}
            placeholder="Full Body Workout"
            error={errors.name?.message}
          />
        </Label>
        <Label htmlFor="description" title="Description">
          <TextArea
            {...register('description')}
            error={errors.description?.message}
            placeholder="A workout routine for the whole body"
          />
        </Label>
        <div className="grid grid-cols-2 gap-2">
          <LabelGroup title="Cycle" className="w-full">
            <RadiobuttonGroup
              {...register('cycle')}
              checked={'week'}
              options={daysOptions}
              onChange={handleOnChange}
              error={errors.cycle?.message}
              className="flex items-center gap-2"
            />
          </LabelGroup>
          <Label htmlFor="days" title="Days" className="w-fit">
            <InputNumber
              {...register('days', inputNumberConfig)}
              value={'7'}
              placeholder="7"
              disabled={!daysEnabled}
              error={errors.days?.message}
            />
          </Label>
        </div>
        <Label htmlFor="initialDate" title="Initial Date" className="w-fit">
          <InputDate
            {...register('initialDate', {
              setValueAs: (value) => (value ? new Date(value) : undefined),
            })}
            error={errors.initialDate?.message}
          />
        </Label>
      </section>
      <ModalFormButtons onClose={handleClose} isPending={isSubmitting} />
    </ModalForm>
  );
}
