import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { useFormContext } from 'react-hook-form';

export function RoutineNameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Label htmlFor="name" title="Name">
      <InputText
        {...register('name')}
        placeholder="Full Body Workout"
        error={errors.name?.message as string}
      />
    </Label>
  );
}
