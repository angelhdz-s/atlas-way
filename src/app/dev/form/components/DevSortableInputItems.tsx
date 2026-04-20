import { useForm } from 'react-hook-form';
import { SortableInputItems } from '@/presentation/modules/form/components/SortableInputItems';
import { DEV_FORM_OPTIONS } from '../mocks/dev.form.mocks.options';
import { Label } from '@/presentation/modules/form/components/fields/Label';

export function DevSortableInputItems() {
  const { control } = useForm();
  return (
    <Label title="Sortable input items" htmlFor="">
      <SortableInputItems
        selectingTitle="Select Box"
        control={control}
        items={DEV_FORM_OPTIONS}
        name="Sortable Input Items"
      />
    </Label>
  );
}
