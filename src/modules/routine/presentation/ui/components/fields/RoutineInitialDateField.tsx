import { useFormContext } from 'react-hook-form';
import { InputDate } from '@/presentation/modules/form/components/fields/InputDate';
import { Label } from '@/presentation/modules/form/components/fields/LabelGroup';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import type { RoutineForm } from '@/modules/routine/presentation/ui/config/routine.schema';

type Props = {
  value?: RoutineDTO['initialDate'];
};

export function RoutineInitialDateField({ value }: Props) {
  const date = value?.toISOString().split('T')[0];
  const {
    register,
    formState: { errors },
  } = useFormContext<RoutineForm>();
  return (
    <Label htmlFor="initialDate" title="Initial Date" className="w-fit">
      <InputDate
        {...register('initialDate', {
          setValueAs: (value) => (value ? new Date(value) : undefined),
        })}
        error={errors.initialDate?.message}
        value={date}
      />
    </Label>
  );
}
