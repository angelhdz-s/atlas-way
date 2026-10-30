'use client';

import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';
import { THEME } from '@/presentation/modules/theme/constants/client';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function ToggleTheme({ className, children }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  };

  if (children)
    return (
      <>
        <Button
          type="button"
          variant={{
            type: 'default',
            color: 'simple',
          }}
          className={twMerge('light:hidden flex', className)}
          onClick={toggleTheme}
        >
          <Icon icon="sun" variant={{ size: 'md', weight: 'moderate' }} />
          {children}
        </Button>
        <Button
          type="button"
          variant={{
            type: 'default',
            color: 'simple',
          }}
          className={twMerge('light:flex hidden', className)}
          onClick={toggleTheme}
        >
          <Icon icon="moon" variant={{ size: 'md', weight: 'moderate' }} />
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
        onClick={toggleTheme}
        aria-label={'Switch to light theme'}
      >
        <Icon icon="sun" variant={{ size: 'md', weight: 'moderate' }} />
      </Button>
      <Button
        type="button"
        variant={{
          type: 'icon',
          color: 'simple',
        }}
        className={twMerge('light:flex hidden', className)}
        onClick={toggleTheme}
        aria-label={'Switch to dark theme'}
      >
        <Icon icon="moon" variant={{ size: 'md', weight: 'moderate' }} />
      </Button>
    </>
  );
}
