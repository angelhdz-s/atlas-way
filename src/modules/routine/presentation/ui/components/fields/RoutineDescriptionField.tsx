import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';

export function RoutineDescriptionField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Label htmlFor="description" title="Description">
      <TextArea
        {...register('description')}
        error={errors.description?.message as string}
        placeholder="A workout routine for the whole body"
      />
    </Label>
  );
}
