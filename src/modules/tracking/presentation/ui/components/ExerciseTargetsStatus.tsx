'use client';

import {
  ExerciseTargetsContext,
  type ExerciseTargetsStep,
} from '@/modules/tracking/presentation/ui/contexts/ExerciseTargetsContext';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useContext } from 'react';

type Props = {
  className?: string;
};

const statusIcons: Record<ExerciseTargetsStep['status'], IconName> = {
  COMPLETED: 'check',
  ERROR: 'octagon-alert',
  PENDING: 'circle-dot',
};

export function ExerciseTargetsStatus({ className }: Props) {
  const { steps } = useContext(ExerciseTargetsContext);
  return (
    <div className={className}>
      <ul>
        {steps.map((s) => {
          const icon = statusIcons[s.status];
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
                  <Icon icon={icon} variant={{ size: 'md', weight: 'thin' }} />{' '}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
