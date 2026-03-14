'use client';

import { IconGripVertical } from '@/presentation/globals/components/Icons';
import type { DnDFormFieldItemDraggableData } from '@/presentation/modules/form/types';
import { useDraggable } from '@dnd-kit/react';

export function RoutineSessionPlanDraggableItem({
  id,
  text,
  dndConfig,
}: {
  id: string;
  text: string;
  dndConfig: DnDFormFieldItemDraggableData;
}) {
  const { ref } = useDraggable({
    id,
    data: dndConfig,
  });
  return (
    <div
      className={`border-bd-muted bg-back flex h-8 w-fit cursor-grab items-center justify-center gap-1 rounded border py-1 pr-3 pl-1 text-sm`}
      ref={ref}
    >
      <IconGripVertical className="size-4" />
      {text}
    </div>
  );
}
