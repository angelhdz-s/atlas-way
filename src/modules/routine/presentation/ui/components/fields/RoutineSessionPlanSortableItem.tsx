'use client';

import { useSortable } from '@dnd-kit/react/sortable';

export function RoutineSessionPlanSortableItem({
  id,
  text,
  index,
  active = false,
}: {
  id: string;
  text: string;
  index: number;
  active?: boolean;
}) {
  const identifierId = id.split('-')[0];
  const { ref } = useSortable({
    id,
    index,
    data: {
      elementId: identifierId,
      dropped: false,
    },
  });
  return (
    <div
      className={`border-bd-muted bg-back flex h-8 w-fit cursor-grab items-center justify-center gap-2 rounded border p-2 px-3 py-1 text-sm ${active ? 'opacity-40' : ''}`}
      ref={ref}
    >
      {text}
    </div>
  );
}
