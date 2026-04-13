import { useFormContext } from 'react-hook-form';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';

type Props = {
  value?: RoutineDTO['name'];
};

export function RoutineNameField({ value }: Props) {
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
        value={value}
      />
    </Label>
  );
}
