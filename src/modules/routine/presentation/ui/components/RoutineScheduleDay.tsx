import { RoutineScheduleDayDraggable } from '@/modules/routine/presentation/ui/components/RoutineScheduleDayDraggable';
import { RoutineScheduleDayDroppable } from '@/modules/routine/presentation/ui/components/RoutineScheduleDayDroppable';
import { twMerge } from 'tailwind-merge';

type SessionProps = {
  name: string;
  onRemove?: () => void;
};

type Props = {
  className?: string;
  day: number;
  session: SessionProps | null;
};

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function RoutineScheduleDay({ className, day, session }: Props) {
  return (
    <article className={twMerge('w-full', className)}>
      <header className="bg-sf-base-default border-bd-base-subtle flex h-8 items-center border-b px-2">
        <h5 className="body-small text-txt-base-body">{WEEK_DAYS[day] ?? 'Day'}</h5>
      </header>
      <div className="bg-sf-base-page h-23 p-1">
        {session !== null ? (
          <RoutineScheduleDayDraggable
            session={{ name: session.name }}
            onClose={session.onRemove}
          />
        ) : (
          <RoutineScheduleDayDroppable />
        )}
      </div>
    </article>
  );
}
