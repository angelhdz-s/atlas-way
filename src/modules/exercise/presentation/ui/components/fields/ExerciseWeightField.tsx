import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';

export function ExerciseWeightField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();

  return (
    <Label htmlFor="exercise.weight" title="Weight (lbs)">
      <InputNumber
        {...register('exercise.weight', inputNumberConfig)}
        error={errors.exercise?.weight?.message}
      />
    </Label>
  );
}
