'use client';

import { useDroppable } from '@dnd-kit/react';

type Props = {
  id: string;
  text: string;
  children: React.ReactNode;
};

export function RoutineSessionPlanDroppableItem({ id, text, children }: Props) {
  const { ref } = useDroppable({
    id,
  });
  return (
    <div ref={ref}>
      <header>{text}</header>
      {children}
    </div>
  );
}
