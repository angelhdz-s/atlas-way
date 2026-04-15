import { useFormContext } from 'react-hook-form';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';

type Props = {
  value?: RoutineDTO['description'];
};

export function RoutineDescriptionField({ value }: Props) {
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
        value={value ?? ''}
      />
    </Label>
  );
}
