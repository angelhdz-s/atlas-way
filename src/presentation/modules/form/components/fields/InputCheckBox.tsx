'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { HTMLAttributes, KeyboardEvent } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export function InputCheckBox(props: Props) {
  const [active, setActive] = useState<boolean>(props.active === true);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') setActive((prev) => !prev);
  };

  const { active: activeProp, ...inputProps } = props;

  return (
    <div
      className="bg-back min-h-10 min-w-20 cursor-pointer rounded-lg"
      onKeyDown={handleEnterKeyDown}
      onClick={handleClick}
    >
      <ul className="flex h-full w-full items-center gap-1 p-1 text-sm">
        <li
          className={twMerge(
            'flex h-full w-full items-center justify-center rounded px-2 py-1 transition-colors',
            active ? 'bg-transparent' : 'bg-middle'
          )}
        >
          Off
        </li>
        <li
          className={twMerge(
            'flex h-full w-full items-center justify-center rounded px-2 py-1 transition-colors',
            active ? 'bg-primary fg-strong-dark' : 'bg-transparent'
          )}
        >
          On
        </li>
      </ul>
      <input {...inputProps} type="checkbox" checked={active} hidden />
    </div>
  );
}
