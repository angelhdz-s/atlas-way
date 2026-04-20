'use client';

import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';
import { Radiobutton } from '@/presentation/modules/form/components/Radiobutton';
import { useState } from 'react';

export function FormComponents() {
  const [checked, setChecked] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueChecked = e.currentTarget.value;
    if (checked !== e.currentTarget.value) setChecked(valueChecked);
  };
  return (
    <div>
      <Label title="Radio button" htmlFor="cycle">
        <Radiobutton
          onChange={handleChange}
          name="cycle"
          label="Week"
          value="week"
          checked={checked === 'week'}
        />
        <Radiobutton
          onChange={handleChange}
          name="cycle"
          label="Custom"
          value="custom"
          checked={checked === 'custom'}
        />
        <Radiobutton
          onChange={handleChange}
          name="cycle"
          label="2 Days"
          value="2days"
          checked={checked === '2days'}
        />
        <ErrorMessage message="Error message" />
      </Label>
      <Label title="Text input" htmlFor="text-input">
        <InputText id="text-input" placeholder="Text here" error="Text input error" />
      </Label>
      <Label title="Text input" htmlFor="text-area">
        <TextArea rows={2} id="text-area" placeholder="Description here" error="Text area error" />
      </Label>
    </div>
  );
}
