import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';
import { LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import type { RoutineForm } from '../../config/routine.schema';

type Props = {
  value?: RoutineDTO['active'];
};

export function RoutineActiveField({ value }: Props) {
  const { register } = useFormContext<RoutineForm>();
  return (
    <LabelGroup title="Active">
      <InputCheckBox {...register('active')} active={value} />
    </LabelGroup>
  );
}
