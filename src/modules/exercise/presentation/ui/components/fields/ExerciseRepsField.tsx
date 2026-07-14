import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';

type Props = {
  value?: ExerciseDTO['reps'] | undefined;
};
export function ExerciseRepsField({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="initialStats.reps" title="Reps">
      <InputNumber
        {...register('exercise.reps', inputNumberConfig)}
        error={errors.exercise?.reps?.message}
        value={value}
      />
    </Label>
  );
}
