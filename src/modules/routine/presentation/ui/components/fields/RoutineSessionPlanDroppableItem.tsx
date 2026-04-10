'use client';

import { useDroppable } from '@dnd-kit/react';
import type { DnDFormFieldItemDroppableData } from '@/presentation/modules/form/form.types';
import { Button } from '@/presentation/modules/button/components/Button';
import { IconPlus } from '@/presentation/globals/components/Icons';

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
      className={`bg-back h-20 rounded text-sm ${dndConfig.droppedId ? 'outline-bd-default outline' : 'opacity-80'}`}
    >
      <header className="bg-middle border-bd-muted flex h-9 items-center justify-between rounded-t border px-1.5 leading-none">
        <h4 className={dndConfig.droppedId ? 'fg-strong font-medium' : ''}>{text}</h4>
        {onAdd !== undefined && (
          <Button
            aria-label="Select a session"
            title="Select a session"
            variantConfig={{ color: 'simple', type: 'square' }}
            className="size-7 rounded-lg"
            onClick={onAdd}
          >
            <IconPlus className="size-4" />
          </Button>
        )}
      </header>
      <main className="w-full p-2">{children}</main>
    </div>
  );
}
