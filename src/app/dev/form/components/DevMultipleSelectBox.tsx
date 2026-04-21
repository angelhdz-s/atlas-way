'use client';

import { useForm } from 'react-hook-form';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import { DEV_FORM_OPTIONS } from '../mocks/dev.form.mocks.options';

export function DevMultipleSelectBox() {
  const { control } = useForm();
  return (
    <MultipleSelectBox
      items={DEV_FORM_OPTIONS}
      control={control}
      label="Multiple Select Box"
      name="multiple-select-box"
      selectingTitle="Select Box from Multiple Select Box"
      error="Multiple Select Box error"
    />
  );
}
