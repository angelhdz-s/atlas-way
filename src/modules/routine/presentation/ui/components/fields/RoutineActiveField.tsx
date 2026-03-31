import { LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { RoutineForm } from '../../config/routine.schema';
import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';
import { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';

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
