import { Label } from '@/presentation/modules/form/components/fields/LabelGroup';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';

type Props = {
  value?: ExerciseDTO['description'];
};

export function ExerciseDescriptionField({ value }: Props) {
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
        value={value ?? undefined}
      />
    </Label>
  );
}
