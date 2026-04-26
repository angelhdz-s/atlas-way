'use client';

import Link from 'next/link';
import { IconMenu } from '@/presentation/globals/components/icons/outline/IconMenu';
import { useHeaderNav } from '@/presentation/modules/nav/hooks/useHeaderNav';
import { Button } from '@/presentation/modules/button/components/Button';

export function HeaderNav() {
  const { showing, handleClick, handleClickOut, hiddenClass } = useHeaderNav();

  return (
    <div className="w-full md:mx-auto md:grid md:w-fit md:place-items-center">
      <nav className="relative text-lg font-medium">
        <Button
          type="button"
          variantConfig={{
            color: 'simple',
            type: 'square',
          }}
          onClick={handleClick}
          className="md:hidden"
        >
          <IconMenu className="size-6" />
        </Button>
        <ul
          className={`${hiddenClass(showing, 'button')} bg-fill-base text-strong absolute top-10 -left-10 z-10 flex w-48 flex-col items-start gap-0 rounded-md py-2 text-left *:grid *:h-full *:w-full *:cursor-pointer *:place-items-start *:px-6 *:py-2 *:transition-colors *:hover:bg-sky-50/5 *:hover:text-current/50 md:relative md:top-auto md:left-auto md:flex md:w-full md:flex-row md:items-center md:gap-16 md:bg-transparent md:p-0 md:text-center *:md:w-fit *:md:place-items-center *:md:p-0 *:md:hover:bg-transparent`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Exercises</Link>
          </li>
          <li>
            <Link href="/">Workouts</Link>
          </li>
        </ul>
      </nav>
      {showing && (
        <div
          onClick={handleClickOut}
          className={`bg-fill-back/80 fixed inset-0 z-1 md:hidden`}
        ></div>
      )}
    </div>
  );
}
