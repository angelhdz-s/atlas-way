import { IconBarbell } from '@/presentation/globals/components/Icons';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { SortableInputItems } from '@/presentation/modules/form/components/SortableInputItems';
import { useFormContext } from 'react-hook-form';
import type { SessionForm } from '../../config/session-schema';
import type { SelectOption } from '@/presentation/modules/form/types';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';

export function SessionExercises({ exercises }: { exercises: SelectOption[] }) {
  const {
    control,
    formState: { errors },
  } = useFormContext<SessionForm>();

  return (
    <FormFieldSection Icon={IconBarbell} title="Exercises" className="space-y-1">
      <SortableInputItems
        control={control}
        name="exercises"
        items={exercises}
        selectingTitle="Select Exercises"
        addButtonLabel="Add Exercise"
      />
      <ErrorMessage message={errors.exercises?.message} />
    </FormFieldSection>
  );
}
