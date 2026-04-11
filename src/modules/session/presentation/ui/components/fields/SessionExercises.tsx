import { useFormContext } from 'react-hook-form';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { SortableInputItems } from '@/presentation/modules/form/components/SortableInputItems';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import type { SessionForm } from '@/modules/session/presentation/ui/config/session.schema';
import type { SelectOption } from '@/presentation/modules/form/form.types';

export function SessionExercises({
  exercises,
  itemsSelected,
}: {
  exercises: SelectOption[];
  itemsSelected: string[];
}) {
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
        itemsSelected={itemsSelected}
      />
      <ErrorMessage message={errors.exercises?.message} />
    </FormFieldSection>
  );
}
