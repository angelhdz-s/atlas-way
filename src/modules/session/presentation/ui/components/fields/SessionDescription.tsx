import { useFormContext } from 'react-hook-form';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { SessionForm } from '@/modules/session/presentation/ui/config/session.schema';

type Props = {
  value?: SessionDTO['description'];
};

export function SessionDescription({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SessionForm>();
  return (
    <Label htmlFor="description" title="Description">
      <TextArea
        {...register('description')}
        placeholder="Day focused on arms training"
        error={errors.description?.message}
        value={value ?? ''}
      />
    </Label>
  );
}
