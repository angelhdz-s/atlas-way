import { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import { Label } from '@/presentation/modules/form/components/fields/LabelInput';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { useFormContext } from 'react-hook-form';

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
      />
    </Label>
  );
}
