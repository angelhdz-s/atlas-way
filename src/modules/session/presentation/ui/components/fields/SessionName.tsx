import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { SessionForm } from '../../config/session-schema';

export function SessionName() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SessionForm>();
  return (
    <Label htmlFor="name" title="Name">
      <InputText
        {...register('name')}
        placeholder="Enter Session name"
        error={errors.name?.message}
      />
    </Label>
  );
}
