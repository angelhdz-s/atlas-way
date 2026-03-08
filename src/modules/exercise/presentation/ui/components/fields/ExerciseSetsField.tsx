import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';

export function ExerciseSetsField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="initialStats.sets" title="Sets">
      <InputNumber
        {...register('initialStats.sets', inputNumberConfig)}
        error={errors.initialStats?.sets?.message}
      />
    </Label>
  );
}
