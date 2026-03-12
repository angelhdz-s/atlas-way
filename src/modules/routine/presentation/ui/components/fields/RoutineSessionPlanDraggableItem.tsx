'use client';

import { useDraggable } from '@dnd-kit/react';

export function RoutineSessionPlanDraggableItem({ id, text }: { id: string; text: string }) {
  const identifierId = id.split('-')[0];
  const { ref } = useDraggable({
    id,
    data: {
      elementId: identifierId,
      dropped: true,
    },
  });
  return (
    <div
      className={`border-bd-muted bg-back flex h-8 w-fit cursor-grab items-center justify-center gap-2 rounded border p-2 px-3 py-1 text-sm`}
      ref={ref}
    >
      {text}
    </div>
  );
}
