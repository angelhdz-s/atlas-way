'use client';

import { useRef, useState } from 'react';
import { Button } from '../../button/components/Button';
import { IconCog, IconLanguage, IconLogout } from '@/presentation/globals/components/Icons';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { useTooltipBackdrop } from '@/presentation/globals/hooks/useTooltipBackdrop';
import { ToggleThemeLabelButton } from '@/presentation/globals/components/ToggleThemeLabelButton';
import { Link } from '../../button/components/Link';

export function SidebarFooter({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useTooltipBackdrop({
    isOpen: open,
    onClose: handleClose,
    ref: containerRef,
  });

  return (
    <footer
      className={`bg-middle relative mx-1 mb-1 flex items-center rounded transition-colors lg:p-1 lg:pr-2 lg:pl-4 ${className}`}
    >
      <div ref={containerRef} className="w-full">
        <div className="flex w-full items-center justify-center gap-1 lg:justify-between">
          <span className="hidden font-light lg:inline">General</span>

          <aside>
            <ul className="flex flex-col items-center lg:flex-row">
              <li>
                <Button variantConfig={{ type: 'square', color: 'simple' }} onClick={handleClick}>
                  <IconCog strokeWidth="1.5" />
                </Button>
              </li>
              <li>
                <Link
                  href="/api/auth/signout"
                  type="button"
                  variantConfig={{
                    type: 'square',
                    color: 'simple',
                  }}
                >
                  <IconLogout className="-mr-1 size-6" />
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        {open && (
          <div className="bg-middle border-bd-default absolute bottom-full left-4 z-10 mb-4 ml-0 rounded-lg border p-2 shadow-lg shadow-black/30">
            <header className="mb-2 px-2 text-base font-light">Settings</header>
            <ul>
              <li className="flex items-center gap-0">
                <ToggleThemeLabelButton className="w-full" />
              </li>
              <li className="flex items-center gap-0">
                <Button variantConfig={{ color: 'simple' }} className="pl-2">
                  <IconLanguage strokeWidth="1.5" />
                  Language
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {open && <TooltipBackdrop />}
    </footer>
  );
}
