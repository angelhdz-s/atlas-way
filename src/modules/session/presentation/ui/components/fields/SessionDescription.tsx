import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';
import type { SessionForm } from '../../config/session.schema';

export function SessionDescription() {
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
      />
    </Label>
  );
}
