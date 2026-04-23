'use client';

import { useState } from 'react';
import { Button } from '@/presentation/modules/button/components/Button';
import { IconCog } from '@/presentation/globals/components/icons/outline/IconCog';
import { IconLogout } from '@/presentation/globals/components/icons/outline/IconLogout';
import { SettingsTooltip } from '@/presentation/modules/sidebar/components/SettingsTooltip';
import { useLogout } from '@/modules/auth/presentation/ui/hooks/useLogout';

export function SidebarFooter({ className = '' }: { className?: string }) {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const { handleLogout } = useLogout();

  const handleClick = () => {
    setSettingsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setSettingsOpen(false);
  };

  return (
    <footer
      className={`bg-middle relative mx-1 mb-1 flex items-center rounded transition-colors lg:p-1 lg:pr-2 lg:pl-4 ${className}`}
    >
      <div className="w-full">
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
                <Button
                  onClick={handleLogout}
                  type="button"
                  variantConfig={{
                    type: 'square',
                    color: 'simple',
                  }}
                >
                  <IconLogout className="-mr-1 size-6" />
                </Button>
              </li>
            </ul>
          </aside>
        </div>

        <SettingsTooltip isOpen={settingsOpen} onClose={handleClose} />
      </div>
    </footer>
  );
}
