'use client';

import { useSortable } from '@dnd-kit/react/sortable';
import type { DnDFormFieldItemDraggableData } from '@/presentation/modules/form/types';
import { IconGripVertical } from '@/presentation/globals/components/Icons';

export function RoutineSessionPlanSortableItem({
  id,
  text,
  index,
  dndConfig,
}: {
  id: string;
  text: string;
  index: number;
  active?: boolean;
  dndConfig: DnDFormFieldItemDraggableData;
}) {
  const { ref } = useSortable({
    id,
    index,
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
