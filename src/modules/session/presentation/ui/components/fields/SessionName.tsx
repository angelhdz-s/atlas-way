import { useFormContext } from 'react-hook-form';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/LabelGroup';
import { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { SessionForm } from '@/modules/session/presentation/ui/config/session.schema';

type Props = {
  value?: SessionDTO['name'];
};

export function SessionName({ value }: Props) {
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
        value={value}
      />
    </Label>
  );
}
