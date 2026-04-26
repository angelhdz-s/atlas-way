'use client';

import { twMerge } from 'tailwind-merge';
import type { HTMLInputProps } from '@/presentation/modules/form/form.types';

function RadiobuttonMark({ isChecked }: { isChecked: boolean }) {
  const borderColor = isChecked ? 'outline-bd-strong' : 'outline-bd-default';
  const backgroundColor = isChecked ? 'bg-default' : 'bg-transparent';
  return (
    <div className={`relative block size-4 rounded-full outline transition-colors ${borderColor}`}>
      <div
        className={`absolute inset-0 m-auto size-2 rounded-full transition-colors ${backgroundColor}`}
      />
    </div>
  );
}

type RadiobuttonProps = HTMLInputProps & {
  label: string;
  value: string;
  checked?: boolean;
};
export function Radiobutton({
  className = '',
  label,
  value,
  checked = false,
  onChange,
  ...props
}: RadiobuttonProps) {
  return (
    <label className="relative">
      <input
        checked={checked}
        type="radio"
        value={value}
        onChange={onChange}
        className="peer absolute size-0 opacity-0"
        {...props}
        readOnly
      />
      <div
        className={twMerge(
          'outline-focus flex h-10 items-center gap-2 rounded px-2 py-1 transition-colors peer-focus:outline-2',
          checked ? '' : 'text-fg-default/50',
          className
        )}
      >
        <RadiobuttonMark isChecked={checked} />
        {label}
      </div>
    </label>
  );
}
