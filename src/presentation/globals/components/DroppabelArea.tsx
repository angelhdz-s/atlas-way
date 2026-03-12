'use client';

import { pointerDistance } from '@dnd-kit/collision';
import { useDroppable } from '@dnd-kit/react';

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function DroppableArea({ children, id, className = '' }: Props) {
  const { ref } = useDroppable({
    id,
    collisionDetector: pointerDistance,
  });
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
