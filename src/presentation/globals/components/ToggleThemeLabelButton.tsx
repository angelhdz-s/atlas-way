'use client';

import { useTheme } from 'next-themes';
import { THEME } from '@/presentation/globals/constants/client';
import { DefaultIcon, IconMoon, IconSun } from '@/presentation/globals/components/Icons';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { twMerge } from 'tailwind-merge';

export function ToggleThemeLabelButton({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  };

  return (
    <VariantButton
      type="button"
      variantConfig={{
        color: 'simple',
      }}
      className={twMerge('pl-2', className)}
      onClick={handleClick}
    >
      <DefaultIcon Icon={IconSun} className="light:hidden" />
      <DefaultIcon Icon={IconMoon} className="light:block hidden" />
      Theme
    </VariantButton>
  );
}
