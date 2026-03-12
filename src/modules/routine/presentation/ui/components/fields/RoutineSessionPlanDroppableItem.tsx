'use client';

import { useDroppable } from '@dnd-kit/react';
import type { DnDFormFieldItemDroppableData } from '@/presentation/modules/form/types';
import type { IconTypes } from '@/presentation/globals/types';

type Props = {
  id: string;
  text: string;
  children: React.ReactNode;
  dndConfig: DnDFormFieldItemDroppableData;
  Icon?: IconTypes;
};

export function RoutineSessionPlanDroppableItem({ id, text, children, dndConfig, Icon }: Props) {
  const { ref } = useDroppable({
    id,
    data: dndConfig,
  });
  return (
    <div
      ref={ref}
      className={`bg-back h-20 rounded text-sm ${dndConfig.droppedId ? 'outline-bd-default outline' : 'opacity-80'}`}
    >
      <header className="bg-middle border-bd-muted flex items-center justify-between rounded-t border p-1.5 leading-none">
        <h4 className={dndConfig.droppedId ? 'fg-strong font-medium' : ''}>{text}</h4>
        {Icon && <Icon className="size-4" />}
      </header>
      <main className="w-full p-2">{children}</main>
    </div>
  );
}
