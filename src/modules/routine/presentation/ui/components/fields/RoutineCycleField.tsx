import { useFormContext } from 'react-hook-form';
import { LabelGroup } from '@/presentation/modules/form/components/fields/Label';
import { routineFormConfig } from '@/modules/routine/presentation/ui/routine.ui.constants';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import type { RoutineForm } from '@/modules/routine/presentation/ui/config/routine.schema';

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
