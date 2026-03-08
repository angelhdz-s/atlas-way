import { IconMan } from '@/presentation/globals/components/Icons';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import type { SelectOption } from '@/presentation/modules/form/types';
import { useFormContext } from 'react-hook-form';
import type { ExerciseFormProps } from '../../schemas/exercise.schema';

type Props = {
  items: SelectOption[];
};

export function ExerciseMusclesField({ items }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ExerciseFormProps>();

  return (
    <FormFieldSection Icon={IconMan} title="To train">
      <MultipleSelectBox
        control={control}
        name="muscles"
        label="Muscles"
        selectingTitle="Select muscles"
        items={items}
        error={errors.muscles?.message}
      ></MultipleSelectBox>
    </FormFieldSection>
  );
}
