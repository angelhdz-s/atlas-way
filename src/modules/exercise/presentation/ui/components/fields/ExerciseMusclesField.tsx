import { useFormContext } from 'react-hook-form';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';

type Props = {
  items: SelectOption[];
  selectedItems: string[];
};

export function ExerciseMusclesField({ items, selectedItems }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();

  return (
    <FormFieldSection icon="person-standing" title="To train">
      <MultipleSelectBox
        control={control}
        name="muscles"
        label="Muscles"
        selectingTitle="Select muscles"
        items={items}
        error={errors.muscles?.message}
        itemsSelected={selectedItems}
      />
    </FormFieldSection>
  );
}
