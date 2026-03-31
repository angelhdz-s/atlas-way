import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';
import { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';

type Props = {
  value?: ExerciseDTO['sets'];
};

export function ExerciseSetsField({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="initialStats.sets" title="Sets">
      <InputNumber
        {...register('exercise.sets', inputNumberConfig)}
        error={errors.exercise?.sets?.message}
        value={value}
      />
    </Label>
  );
}
