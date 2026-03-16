'use client';

import { DraggableBadge } from '@/presentation/globals/components/DraggableBadge';
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
  return <DraggableBadge ref={ref}>{text}</DraggableBadge>;
}
