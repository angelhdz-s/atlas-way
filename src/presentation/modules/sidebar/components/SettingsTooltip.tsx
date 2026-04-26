'use client';

import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { ToggleTheme } from '@/presentation/modules/theme/components/ToggleTheme';
import { Button } from '@/presentation/modules/button/components/Button';
import { IconLanguage } from '@/presentation/globals/components/icons/outline/IconLanguage';
import { useLayer } from '@/presentation/globals/hooks/useLayer';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SettingsTooltip({ isOpen, onClose }: Props) {
  const { ref } = useLayer({
    isOpen,
    onClose,
  });

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={ref}
        className="bg-base border-bd-default absolute bottom-full left-4 z-10 mb-4 ml-0 rounded-lg border p-2 shadow-lg shadow-black/30"
      >
        <header className="mb-2 px-2 text-base font-light">Settings</header>
        <ul>
          <li className="flex items-center gap-0">
            <ToggleTheme className="w-full pl-2">Theme</ToggleTheme>
          </li>
          <li className="flex items-center gap-0">
            <Button variantConfig={{ color: 'simple' }} className="pl-2">
              <IconLanguage strokeWidth="1.5" />
              Language
            </Button>
          </li>
        </ul>
      </div>
      <TooltipBackdrop />
    </>
  );
}
