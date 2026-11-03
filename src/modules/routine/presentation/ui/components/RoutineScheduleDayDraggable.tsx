'use client';

import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useDraggable } from '@dnd-kit/react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  session: {
    name: string;
  };
  onClose?: (() => void) | undefined;
};

export function RoutineScheduleDayDraggable({ className, session, onClose }: Props) {
  const id = useId();
  const { ref } = useDraggable({
    id,
  });
  return (
    <article
      ref={ref}
      className={twMerge(
        'bg-sf-base-default border-bd-base-default h-full cursor-grab rounded-sm border p-2',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Icon icon="grip-vertical" variant={{ size: 'sm', weight: 'thin' }} />
        <span className="flex-1">{session.name}</span>
        <Button
          variant={{ type: 'icon', size: 'sm', color: 'simple' }}
          aria-label="Remove session"
          onClick={onClose}
        >
          <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
        </Button>
      </div>
    </article>
  );
}
