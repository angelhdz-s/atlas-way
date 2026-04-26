import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import {
  getGridColsClassFromWithStatus,
  getStatusTextColorClass,
} from '@/presentation/globals/lib/get-classes';
import { StatusIcon } from '@/modules/status/components/StatusIcons';
import type { StatusDayType } from '@/presentation/globals/mocks/routines';

const iconSize = 'size-4.5';

type ExerciseRowType = {
  status: StatusDayType;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export function ExerciseRow({
  exercise,
  withStatus = false,
  className = '',
}: {
  exercise: ExerciseRowType;
  withStatus?: boolean;
  className?: string;
}) {
  const { name, reps, sets, status, weight } = exercise;
  const statusTextColorClass = getStatusTextColorClass(status);
  const withStatusGridClass = getGridColsClassFromWithStatus(withStatus);
  return (
    <li
      className={`grid items-center gap-1 text-center ${withStatusGridClass} ${statusTextColorClass} ${className}`}
    >
      {withStatus && (
        <span>
          <StatusIcon status={status} className={iconSize} />
        </span>
      )}
      <span className="text-left">{name}</span>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0.5">
        <span className="text-right">{sets}</span>
        <span className="text-default/50 flex items-center justify-center">
          <IconXMark className="text-muted size-3" strokeWidth="3" />
        </span>
        <span className="text-left">{reps}</span>
      </div>
      <span className="text-center">{weight}</span>
    </li>
  );
}
