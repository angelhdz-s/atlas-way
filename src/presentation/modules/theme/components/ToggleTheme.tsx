'use client';

import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';
import { THEME } from '@/presentation/modules/theme/constants/client';
import { IconMoon } from '@/presentation/globals/components/icons/outline/IconMoon';
import { IconSun } from '@/presentation/globals/components/icons/outline/IconSun';
import { Button } from '@/presentation/modules/button/components/Button';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function ToggleTheme({ className, children }: Props) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  };

  if (children)
    return (
      <>
        <Button
          type="button"
          variant={{
            type: 'iconText',
            color: 'simple',
          }}
          className={twMerge('light:hidden flex', className)}
          onClick={handleClick}
          Icon={IconSun}
        >
          {children}
        </Button>
        <Button
          type="button"
          variant={{
            type: 'iconText',
            color: 'simple',
          }}
          className={twMerge('light:flex hidden', className)}
          onClick={handleClick}
          Icon={IconMoon}
        >
          {children && children}
        </Button>
      </>
    );

  return (
    <>
      <Button
        type="button"
        variant={{
          type: 'icon',
          color: 'simple',
        }}
        className={twMerge('light:hidden flex', className)}
        onClick={handleClick}
        aria-label={'Switch to light theme'}
        Icon={IconSun}
      />
      <Button
        type="button"
        variant={{
          type: 'icon',
          color: 'simple',
        }}
        className={twMerge('light:flex hidden', className)}
        onClick={handleClick}
        aria-label={'Switch to dark theme'}
        Icon={IconMoon}
      />
    </>
  );
}
