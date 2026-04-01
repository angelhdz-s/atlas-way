'use client';

import { useSortable } from '@dnd-kit/react/sortable';
import type { DnDFormFieldItemDraggableData } from '@/presentation/modules/form/form.types';
import { DraggableBadge } from '@/presentation/globals/components/DraggableBadge';

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
  return <DraggableBadge ref={ref}>{text}</DraggableBadge>;
}
