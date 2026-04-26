'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { HTMLAttributes, KeyboardEvent } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export function InputCheckBox(props: Props) {
  const { active: activeProp, ...inputProps } = props;
  const [active, setActive] = useState<boolean>(activeProp === true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setActive((prev) => !prev);
    }
    if (e.key === ' ') {
      e.preventDefault();
      setActive((prev) => !prev);
    }
  };

  return (
    <>
      <input
        {...inputProps}
        onChange={handleChange}
        onKeyDown={handleEnterKeyDown}
        type="checkbox"
        checked={active}
        aria-checked={active ? 'true' : 'false'}
        role="switch"
        className="peer absolute size-0 opacity-0"
      />
      <div
        data-testid="input-checkbox"
        onClick={() => setActive((prev) => !prev)}
        className="bg-fill-back grid h-10 w-16 cursor-pointer place-items-center rounded-md p-1 peer-focus-visible:outline"
      >
        <span
          className={twMerge(
            'flex h-full w-full items-center justify-center rounded px-2 py-1 transition-colors',
            active ? 'bg-primary text-strong-dark' : 'bg-fill-base'
          )}
        >
          {active ? 'On' : 'Off'}
        </span>
      </div>
    </>
  );
}
