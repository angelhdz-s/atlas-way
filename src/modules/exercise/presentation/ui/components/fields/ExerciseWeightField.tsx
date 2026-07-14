import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';

type Props = {
  value?: ExerciseDTO['weight'] | undefined;
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
