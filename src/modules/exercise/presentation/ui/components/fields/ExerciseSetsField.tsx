import { useFormContext } from 'react-hook-form';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';

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
