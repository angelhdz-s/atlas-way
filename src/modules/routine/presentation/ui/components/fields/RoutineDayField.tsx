import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import type { RoutineForm } from '@/modules/routine/presentation/ui/config/routine.schema';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';

type Props = {
  daysEnabled: boolean;
};

export function RoutineDayField({ daysEnabled }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<RoutineForm>();
  return (
    <Label htmlFor="days" title="Days" className="w-full">
      <InputNumber
        {...register('days', inputNumberConfig)}
        value={'7'}
        placeholder="7"
        disabled={!daysEnabled}
        error={errors.days?.message}
      />
    </Label>
  );
}
