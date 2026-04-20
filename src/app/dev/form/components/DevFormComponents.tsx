'use client';

import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';
import { InputDate } from '@/presentation/modules/form/components/fields/InputDate';
import { DevRadiobuttons } from './DevRadiobuttons';
import { DevFormGroup } from './DevFormGroup';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';
import { DevSelectBox } from './DevSelectBox';
import { DevMultipleSelectBox } from './DevMultipleSelectBox';
import { DevSortableInputItems } from './DevSortableInputItems';
import { Select } from '@/presentation/modules/form/components/fields/Select';
import { DEV_FORM_OPTIONS } from '../mocks/dev.form.mocks.options';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconAlarm } from '@/presentation/globals/components/icons/outline/IconAlarm';
import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import { Button } from '@/presentation/modules/button/components/Button';

type Props = {
  className?: string;
};

export function DevFormComponents({ className }: Props) {
  return (
    <div className="space-y-4">
      <DevFormGroup className={className}>
        <DevRadiobuttons />
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Text input" htmlFor="text-input">
          <InputText id="text-input" placeholder="Text here" error="Text input error" />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Text area" htmlFor="text-area">
          <TextArea
            rows={2}
            id="text-area"
            placeholder="Description here"
            error="Text area error"
          />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Number input" htmlFor="number-input">
          <InputNumber id="number-input" placeholder="Number here" error="Number input error" />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Checkbox" htmlFor="checkbox">
          <InputCheckBox />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Date input" htmlFor="date-input">
          <InputDate />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <DevSelectBox />
      </DevFormGroup>

      <DevFormGroup className={className}>
        <DevMultipleSelectBox />
      </DevFormGroup>

      <DevFormGroup className={className}>
        <DevSortableInputItems />
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Select" htmlFor="">
          <Select options={DEV_FORM_OPTIONS} error="Select error" />
        </Label>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <FormFieldSection title="Form field section" Icon={IconAlarm}>
          Inputs here
        </FormFieldSection>
      </DevFormGroup>

      <DevFormGroup className={className}>
        <Label title="Form buttons" htmlFor="">
          <div className="flex items-center gap-2">
            <Button variantConfig={{ color: 'simple', type: 'square' }}>
              <IconXMark />
            </Button>
            <Button variantConfig={{ color: 'simple' }}>Cancel</Button>
            <Button variantConfig={{ color: 'primary' }}>Done</Button>
          </div>
        </Label>
      </DevFormGroup>
    </div>
  );
}
