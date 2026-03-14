import { InputDate } from '@/presentation/modules/form/components/fields/InputDate';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { RoutineForm } from '../../config/routine.schema';

export function RoutineInitialDateField() {
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
      />
    </Label>
  );
}
