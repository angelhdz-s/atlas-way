import { LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { useFormContext } from 'react-hook-form';
import type { RoutineForm } from '../../config/routine-schema';
import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';

export function RoutineActiveField() {
  const { register } = useFormContext<RoutineForm>();
  return (
    <LabelGroup title="Active">
      <InputCheckBox {...register('active')} active />
    </LabelGroup>
  );
}
