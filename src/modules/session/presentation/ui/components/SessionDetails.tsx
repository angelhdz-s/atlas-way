import { ExerciseRow } from '@/modules/exercise/presentation/ui/components/ExerciseList';
import { StatusIcon } from '@/modules/status/components/StatusIcons';
import {
  getGridColsClassFromWithStatus,
  getStatusTextColorClass,
} from '@/presentation/globals/lib/get-classes';
import type { StatusDayType } from '@/presentation/globals/mocks/routines';

export type exerciseType = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  status: StatusDayType;
};

export type SessionDetailsType = {
  id: number;
  name: string;
  description?: string;
  exercises: exerciseType[];
  status: StatusDayType;
  date?: string;
};

export function SessionDetails({
  withStatus = false,
  session,
}: {
  withStatus?: boolean;
  session: SessionDetailsType;
}) {
  const { name, exercises, status } = session;
  const statusTextColorClass = getStatusTextColorClass(status);
  const withStatusGridClass = getGridColsClassFromWithStatus(withStatus);
  return (
    <>
      <header className={`flex items-center justify-between gap-2 ${statusTextColorClass}`}>
        <main className="flex items-center gap-2">
          <h4 className="text-lg">{name}</h4>
          {withStatus && (
            <aside>
              <StatusIcon status={status} className="size-6" />
            </aside>
          )}
        </main>
        {session.date && (
          <aside>
            <span className="bg-subtle/5 text-default/50 rounded-full px-3 py-1 text-sm">
              {session.date}
            </span>
          </aside>
        )}
      </header>
      <main className="font-light">
        <ul>
          <li
            className={`text-default/50 grid w-full gap-1 text-center text-sm font-light ${withStatusGridClass}`}
          >
            {withStatus && <span></span>}
            <span className="text-left">Exercise</span>
            <span>Sets x Reps</span>
            <span>Weight</span>
          </li>
          {exercises.map((exercise, index) => (
            <ExerciseRow withStatus={withStatus} exercise={exercise} key={index} />
          ))}
        </ul>
      </main>
    </>
  );
}
