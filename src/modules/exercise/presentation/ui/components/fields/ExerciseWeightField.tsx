import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';

type Props = {
  value?: ExerciseDTO['weight'];
};

export function ExerciseWeightField({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();

  return (
    <Label htmlFor="exercise.weight" title="Weight (lbs)">
      <InputNumber
        {...register('exercise.weight', inputNumberConfig)}
        error={errors.exercise?.weight?.message}
        value={value}
      />
    </Label>
  );
}
