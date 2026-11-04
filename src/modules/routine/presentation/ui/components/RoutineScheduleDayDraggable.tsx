'use client';

import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  session: {
    name: string;
  };
  onClose?: (() => void) | undefined;
};

export function RoutineScheduleDayDraggable({ className, session, onClose }: Props) {
  // const id = useId();
  // const { ref } = useDraggable({
  //   id,
  // });
  return (
    <article
      className={twMerge(
        'bg-sf-base-default border-bd-base-default flex h-10 w-full flex-1 cursor-grab items-center rounded-sm border pl-2',
        className
      )}
    >
      {/* ref={ref} */}
      <div className="flex flex-1 items-center gap-2">
        <Icon icon="grip-vertical" variant={{ size: 'sm', weight: 'thin' }} />
        <span className="body-medium text-txt-base-heading flex-1">{session.name}</span>
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
