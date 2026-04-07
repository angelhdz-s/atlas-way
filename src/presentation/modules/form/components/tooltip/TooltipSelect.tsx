import { IconXMark } from '@/presentation/globals/components/Icons';
import { Select } from '../fields/Select';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import type { SelectOption } from '../../form.types';
import { useRef } from 'react';

type Props = {
  title: string;
  selectOptions: SelectOption[];
  onSelectChange?: (value: SelectOption['value']) => void;
  onClose?: () => void;
};

export function TooltipSelect({ title, onClose, onSelectChange, selectOptions }: Props) {
  const selectRef = useRef<null | HTMLSelectElement>(null);

  const handleSelectOption = () => {
    if (!selectRef.current) return;
    const value = selectRef.current.value;
    onSelectChange?.(value);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 grid size-full place-items-center bg-black/50">
      <div className="bg-middle size-90 rounded-2xl border border-white/5">
        <header className="flex items-center justify-between gap-2">
          <h5>{title}</h5>
          <VariantButton onClick={onClose} variantConfig={{ type: 'square', color: 'simple' }}>
            <IconXMark />
          </VariantButton>
        </header>
        <main className="px-4 pb-4">
          <Select ref={selectRef} multiple={false} options={selectOptions} />
          <VariantButton
            variantConfig={{ color: 'primary', size: 'sm' }}
            onClick={handleSelectOption}
          >
            Done
          </VariantButton>
        </main>
      </div>
    </div>
  );
}
