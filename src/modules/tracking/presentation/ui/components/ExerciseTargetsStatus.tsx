'use client';

import type { ExerciseTargetsStep } from '@/modules/tracking/presentation/ui/contexts/ExerciseTargets.context';
import type { IconTypes } from '@/presentation/globals/presentation.types';
import { useContext } from 'react';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { ExerciseTargetsContext } from '@/modules/tracking/presentation/ui/contexts/ExerciseTargets.context';

type Props = {
  className?: string;
};

const statusIcons: Record<ExerciseTargetsStep['status'], IconTypes> = {
  complete: IconCheck,
  error: IconX,
  pending: IconClock,
};

export function ExerciseTargetsStatus({ className }: Props) {
  const { steps } = useContext(ExerciseTargetsContext);
  return (
    <div className={className}>
      <ul>
        {steps.map((s) => {
          const Icon = statusIcons[s.status];
          return (
            <li key={s.id}>
              <ul className="flex items-center gap-2">
                <li className="w-full">{s.title}</li>
                <li className="w-fit whitespace-nowrap">
                  {s.sets} x {s.reps}
                </li>
                <li className="w-fit">{s.weight}</li>
                <li className="w-fit">
                  {' '}
                  <Icon strokeWidth="1" className="size-5" />{' '}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
