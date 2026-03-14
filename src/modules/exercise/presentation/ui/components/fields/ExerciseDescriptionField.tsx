import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';

export function ExerciseDescriptionField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="exercise.description" title="Description">
      <TextArea
        {...register('exercise.description')}
        error={errors.exercise?.description?.message}
        placeholder="A compound exercise that targets the chest, shoulders, and triceps."
      />
    </Label>
  );
}
