import { useFormContext } from 'react-hook-form';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { SessionForm } from '@/modules/session/presentation/ui/config/session.schema';
import { inputDescriptionConfig } from '@/presentation/globals/utils/react-hook-form.utils';

type Props = {
  value?: SessionDTO['description'] | undefined;
};

export function SessionDescription({ value }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SessionForm>();
  return (
    <Label htmlFor="description" title="Description">
      <TextArea
        {...register('description', inputDescriptionConfig)}
        placeholder="Day focused on arms training"
        error={errors.description?.message}
        value={value ?? ''}
      />
    </Label>
  );
}
