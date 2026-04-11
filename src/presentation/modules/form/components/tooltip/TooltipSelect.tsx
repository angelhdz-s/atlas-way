import { IconXMark } from '@/presentation/globals/components/icons/Icons';
import { Select } from '../fields/Select';
import { Button } from '@/presentation/modules/button/components/Button';
import type { SelectOption } from '../../form.types';
import { useRef } from 'react';
import { LabelGroup } from '../fields/LabelInput';

type Props = {
  title: string;
  label: string;
  selectOptions: SelectOption[];
  onSelectChange?: (value: SelectOption['value']) => void;
  onClose?: () => void;
};

export function TooltipSelect({ label, title, onClose, onSelectChange, selectOptions }: Props) {
  const selectRef = useRef<null | HTMLSelectElement>(null);

  const handleSelectOption = () => {
    if (!selectRef.current) return;
    const value = selectRef.current.value;
    onSelectChange?.(value);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 grid size-full place-items-center bg-black/50">
      <div className="bg-middle w-90 space-y-4 rounded-2xl border border-white/5">
        <header className="flex items-center justify-between gap-2 pl-4">
          <h5>{title}</h5>
          <Button onClick={onClose} variantConfig={{ type: 'square', color: 'simple' }}>
            <IconXMark />
          </Button>
        </header>
        <main className="space-y-4 px-4 pb-4">
          <LabelGroup title={label}>
            <Select ref={selectRef} multiple={false} options={selectOptions} />
          </LabelGroup>
          <footer className="flex items-center justify-end gap-2">
            <Button variantConfig={{ color: 'simple', size: 'sm' }} onClick={onClose}>
              Cancel
            </Button>
            <Button variantConfig={{ color: 'primary', size: 'sm' }} onClick={handleSelectOption}>
              Done
            </Button>
          </footer>
        </main>
      </div>
    </div>
  );
}
