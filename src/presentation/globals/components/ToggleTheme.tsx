'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { THEME } from '@/presentation/globals/constants/client';
import {
  DefaultIcon,
  defaultIconSizeClass,
  Moon,
  Sun,
} from '@/presentation/globals/components/Icons';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

export function ToggleTheme({
  className = '',
}: {
  className?: string;
}) {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(
      theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <VariantButton
      type="button"
      size="md"
      className={`animate-fade cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {theme === THEME.DARK && <DefaultIcon Icon={Sun} />}
      {theme === THEME.LIGHT && <DefaultIcon Icon={Moon} />}
    </VariantButton>
  ) : (
    <VariantButton
      size="md"
      type="button"
      className={className}
    >
      <div className={defaultIconSizeClass}></div>
    </VariantButton>
  );
}
