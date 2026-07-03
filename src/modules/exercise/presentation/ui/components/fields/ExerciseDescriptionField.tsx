import { Label } from '@/presentation/modules/form/components/fields/Label';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import { inputDescriptionConfig } from '@/presentation/globals/utils/react-hook-form.utils';

type Props = {
  value?: ExerciseDTO['description'] | undefined;
};

export function ExerciseDescriptionField({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();
  return (
    <Label htmlFor="exercise.description" title="Description">
      <TextArea
        {...register('exercise.description', inputDescriptionConfig)}
        error={errors.exercise?.description?.message}
        placeholder="A compound exercise that targets the chest, shoulders, and triceps."
        value={value ?? undefined}
      />
    </Label>
  );
}
