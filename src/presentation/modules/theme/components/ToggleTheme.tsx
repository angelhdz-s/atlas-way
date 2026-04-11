'use client';

import { useTheme } from 'next-themes';
import { THEME } from '@/presentation/modules/theme/constants/client';
import { DefaultIcon, IconMoon, IconSun } from '@/presentation/globals/components/icons/Icons';
import { Button } from '@/presentation/modules/button/components/Button';

export function ToggleTheme({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  };

  return (
    <Button
      type="button"
      variantConfig={{
        type: 'square',
        color: 'simple',
      }}
      className={className}
      onClick={handleClick}
    >
      <DefaultIcon Icon={IconSun} className="light:hidden" />
      <DefaultIcon Icon={IconMoon} className="light:block hidden" />
    </Button>
  );
}
