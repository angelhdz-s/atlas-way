'use client';

import {
  DropdownMenu,
  type DropdownMenuItem,
} from '@/presentation/globals/components/DropdownMenu';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  actions: DropdownMenuItem[];
  menuSide: 'right' | 'left';
};

export function ActionsButton({ className, actions, menuSide = 'right' }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref } = useLayer({
    isOpen: isMenuOpen,
    onClose: () => setIsMenuOpen(false),
  });

  const areActionsEmpty = actions.length === 0;

  const openMenu = () => {
    if (areActionsEmpty) return;
    if (isMenuOpen) return;
    setIsMenuOpen(true);
  };

  return (
    <div className={twMerge('relative w-fit', className)}>
      <Button
        variant={{
          type: 'icon',
          size: 'sm',
          color: 'simple',
        }}
        onClick={openMenu}
      >
        <Icon icon="ellipsis-vertical" variant={{ size: 'sm', weight: 'moderate' }} />
      </Button>
      {isMenuOpen && (
        <>
          <div
            ref={ref}
            className={twMerge(
              'absolute top-0 z-10',
              menuSide === 'right' ? 'left-full' : 'right-full'
            )}
          >
            <DropdownMenu items={actions} />
          </div>
          <TooltipBackdrop className="bg-transparent" />
        </>
      )}
    </div>
  );
}
