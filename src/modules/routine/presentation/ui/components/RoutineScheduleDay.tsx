'use client';

import { RoutineScheduleDayDraggable } from '@/modules/routine/presentation/ui/components/RoutineScheduleDayDraggable';
import { RoutineScheduleDayEmpty } from '@/modules/routine/presentation/ui/components/RoutineScheduleDayEmpty';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type SessionProps = {
  name: string;
  onRemove?: () => void;
};

type Props = {
  className?: string;
  day: number;
  session: SessionProps | null;
  isDirty?: boolean;
  onRollback?: () => void;
  isFirst: boolean;
  isLast: boolean;
};

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function RoutineScheduleDay({
  className,
  day,
  session,
  isDirty = false,
  onRollback,
  isFirst,
  isLast,
}: Props) {
  // const id = useId();
  // const { ref, isDropTarget } = useDroppable({
  //   id,
  // });

  const dayName = WEEK_DAYS[day] ?? 'Day';
  const isEmpty = session === null;

  // if (isDropTarget)
  //   return (
  //     <article className="relative h-18 flex-1 p-1">
  //       <RoutineScheduleDayHeader
  //         dayName={dayName}
  //         isDirty={isDirty}
  //         onRollback={onRollback}
  //         className="absolute -top-7 right-0 left-0 w-full rounded-sm border shadow-2xl"
  //       />
  //       <RoutineScheduleDayDroppable action={isEmpty ? 'add' : 'swap'} />
  //     </article>
  //   );

  return (
    <article className={twMerge('group w-full', className)}>
      {/* ref={ref} */}
      <RoutineScheduleDayHeader
        dayName={dayName}
        isDirty={isDirty}
        onRollback={onRollback}
        className={twMerge(
          isFirst && 'rounded-tl-lg',
          isLast && 'rounded-tr-lg',
          isEmpty && 'bg-sf-base-page'
        )}
      />
      <div
        className={twMerge(
          'bg-sf-base-page flex h-12 items-center justify-center p-1',
          isFirst && 'rounded-bl-lg',
          isLast && 'rounded-br-lg'
        )}
      >
        {session !== null ? (
          <RoutineScheduleDayDraggable
            session={{ name: session.name }}
            onClose={session.onRemove}
          />
        ) : (
          <RoutineScheduleDayEmpty />
        )}
      </div>
    </article>
  );
}

type RoutineScheduleDayHeaderProps = {
  isDirty: Props['isDirty'];
  onRollback?: Props['onRollback'] | undefined;
  dayName: string;
  className?: string;
};

export function RoutineScheduleDayHeader({
  isDirty,
  onRollback,
  dayName,
  className,
}: RoutineScheduleDayHeaderProps) {
  return (
    <header
      className={twMerge(
        'bg-sf-base-default border-bd-base-subtle flex h-6 items-center border-b px-2',
        className
      )}
    >
      <h5
        className={twMerge(
          'body-small flex-1',
          !isDirty ? 'text-txt-base-body' : 'text-txt-in-progress-default'
        )}
      >
        {dayName}
      </h5>
      {isDirty && (
        <button
          type="button"
          onClick={onRollback}
          className={twMerge(
            'flex size-5 cursor-pointer items-center justify-center',
            'before:bg-sf-in-progress-static before:block before:size-2 before:rounded-full group-hover:before:hidden'
          )}
        >
          <Icon
            icon="rotate-ccw"
            variant={{ size: 'sm', weight: 'thin' }}
            className="text-ic-in-progress-default hidden group-hover:block"
          />
        </button>
      )}
    </header>
  );
}
