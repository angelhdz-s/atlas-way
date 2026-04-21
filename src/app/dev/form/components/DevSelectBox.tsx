'use client';

import { useState } from 'react';
import { Button } from '@/presentation/modules/button/components/Button';
import { Label } from '@/presentation/modules/form/components/fields/Label';
import { SelectBox } from '@/presentation/modules/form/components/SelectBox';
import { DEV_FORM_OPTIONS } from '../mocks/dev.form.mocks.options';

export function DevSelectBox() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Label title="Select Box" htmlFor="select-box">
      <Button variantConfig={{ color: 'subtle' }} onClick={handleOpen}>
        Open Select Box
      </Button>
      <SelectBox
        title="Select Box"
        options={DEV_FORM_OPTIONS}
        isOpen={open}
        onAdd={() => {}}
        onClose={handleClose}
      />
    </Label>
  );
}
