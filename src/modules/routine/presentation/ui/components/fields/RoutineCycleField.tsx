import { LabelGroup } from '@/presentation/modules/form/components/fields/LabelInput';
import { routineFormConfig } from '../../routine.ui.constants';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import { useFormContext } from 'react-hook-form';
import type { RoutineForm } from '../../config/routine-schema';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RoutineCycleField({ onChange }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<RoutineForm>();

  const defaultCycle = routineFormConfig.defaultCycle;

  return (
    <LabelGroup title="Cycle" className="w-fit">
      <RadiobuttonGroup
        {...register('cycleType')}
        checked={'week'}
        options={[defaultCycle]}
        onChange={onChange}
        error={errors.cycleType?.message}
        className="flex items-center gap-2"
      />
    </LabelGroup>
  );
}
