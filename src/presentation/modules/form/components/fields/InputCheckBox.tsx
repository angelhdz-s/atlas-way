'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { HTMLAttributes, KeyboardEvent } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
  active?: boolean;
}

export function InputCheckBox(props: Props) {
  const { active: activeProp = false, ...inputProps } = props;
  const [active, setActive] = useState<boolean>(activeProp);

  const toggleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        onChange={toggleCheck}
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
        className="ring-bd-strong grid h-8 w-16 cursor-pointer place-items-center rounded-full ring peer-focus-visible:outline"
      >
        <div
          className={twMerge(
            'relative flex h-full w-full items-center justify-center rounded-full py-1 transition-colors',
            active ? 'bg-primary text-fg-strong-dark' : 'bg-fill-base'
          )}
        >
          <div
            className={twMerge(
              'ring-bd-strong absolute inset-0 top-0 my-auto block size-8 rounded-full bg-white ring transition-[left]',
              'before:absolute before:inset-0 before:m-auto before:size-6 before:rounded-full before:bg-linear-275 before:from-white before:to-zinc-200',
              active ? 'left-8' : 'left-0'
            )}
          />
        </div>
      </div>
    </>
  );
}
