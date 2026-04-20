'use client';

import { useId } from 'react';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';

export function DevRadiobuttons() {
  const id = useId();

  return (
    <Label title="Radio button" htmlFor={id}>
      <RadiobuttonGroup
        error="Radio buttons error"
        options={[
          { label: 'Strength', value: 'strength' },
          { label: 'Health', value: 'health' },
          { label: 'Condition', value: 'condition' },
        ]}
        className="flex items-center gap-2"
      />
    </Label>
  );
}
