import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';

type Props = {
  value?: ExerciseDTO['reps'];
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
