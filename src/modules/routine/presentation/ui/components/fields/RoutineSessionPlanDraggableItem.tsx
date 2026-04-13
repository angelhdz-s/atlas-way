'use client';

import { useDraggable } from '@dnd-kit/react';
import { DraggableBadge } from '@/presentation/globals/components/DraggableBadge';
import type { DnDFormFieldItemDraggableData } from '@/presentation/modules/form/form.types';

export function RoutineSessionPlanDraggableItem({
  id,
  text,
  dndConfig,
  onRemove,
}: {
  id: string;
  text: string;
  dndConfig: DnDFormFieldItemDraggableData;
  onRemove?: () => void;
}) {
  const { ref } = useDraggable({
    id,
    data: dndConfig,
  });
  return (
    <DraggableBadge onRemove={onRemove} ref={ref}>
      {text}
    </DraggableBadge>
  );
}
