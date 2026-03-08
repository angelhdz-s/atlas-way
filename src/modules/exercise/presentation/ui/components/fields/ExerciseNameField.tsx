import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';

export function ExerciseNameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="exercise.name" title="Name">
      <InputText
        {...register('exercise.name')}
        error={errors.exercise?.name?.message}
        placeholder="Bench Press"
      />
    </Label>
  );
}
