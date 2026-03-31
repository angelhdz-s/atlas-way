import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';
import type { SessionForm } from '../../config/session.schema';
import { SessionDTO } from '@/modules/session/application/dtos/session.dto';

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
