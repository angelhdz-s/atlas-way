'use client';

import type { DnDFormFieldItemDroppableData } from '@/presentation/modules/form/form.types';
import { useDroppable } from '@dnd-kit/react';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  id: string;
  text: string;
  children: React.ReactNode;
  dndConfig: DnDFormFieldItemDroppableData;
  onAdd?: () => void;
};

export function RoutineSessionPlanDroppableItem({ id, text, children, dndConfig, onAdd }: Props) {
  const { ref } = useDroppable({
    id,
    data: dndConfig,
  });
  return (
    <div
      ref={ref}
      className={`bg-fill-back h-20 rounded text-sm ${dndConfig.droppedId ? 'outline-bd-default outline' : 'opacity-80'}`}
    >
      <header className="bg-fill-base border-bd-muted flex h-9 items-center justify-between rounded-t border px-1.5 leading-none">
        <h4 className={dndConfig.droppedId ? 'text-fg-strong font-medium' : ''}>{text}</h4>
        {onAdd !== undefined && (
          <Button
            title="Select a session"
            variant={{ color: 'simple', type: 'icon' }}
            onClick={onAdd}
            className="size-7 rounded-lg"
            aria-label="Select a session"
          >
            <Icon icon="plus" variant={{ size: 'sm', weight: 'moderate' }} />
          </Button>
        )}
      </header>
      <main className="w-full p-2">{children}</main>
    </div>
  );
}
