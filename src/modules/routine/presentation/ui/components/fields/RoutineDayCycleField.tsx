import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { Label, LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { useState } from 'react';
import { routineFormConfig } from '../../routine.ui.constants';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import { useFormContext } from 'react-hook-form';
import type { RoutineForm } from '../../config/routine-schema';

export function RoutineDayCycleField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RoutineForm>();
  const [daysEnabled, setDaysEnabled] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value === 'custom' && daysEnabled) return;
    setDaysEnabled(value === 'custom');
  };

  const defaultCycle = routineFormConfig.defaultCycle;

  return (
    <div className="flex gap-4">
      <LabelGroup title="Cycle" className="w-fit">
        <RadiobuttonGroup
          {...register('cycle')}
          checked={'week'}
          options={[defaultCycle]}
          onChange={handleOnChange}
          error={errors.cycle?.message}
          className="flex items-center gap-2"
        />
      </LabelGroup>
      <Label htmlFor="days" title="Days" className="w-full">
        <InputNumber
          {...register('days', inputNumberConfig)}
          value={'7'}
          placeholder="7"
          disabled={!daysEnabled}
          error={errors.days?.message}
        />
      </Label>
    </div>
  );
}
