'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { THEME } from '@/presentation/globals/constants/client';
import {
  DefaultIcon,
  defaultIconSizeClass,
  IconMoon,
  IconSun,
} from '@/presentation/globals/components/Icons';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

export function ToggleTheme({
  className = '',
}: {
  className?: string;
}) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(
      theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  return (
    <VariantButton
      color="simple"
      type="square"
      className={className}
      onClick={handleClick}
    >
      <DefaultIcon
        Icon={IconSun}
        className="light:hidden"
      />
      <DefaultIcon
        Icon={IconMoon}
        className="light:block hidden"
      />
    </VariantButton>
  );
}
