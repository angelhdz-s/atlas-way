import { DAYS, type DayWeeksType } from '@/presentation/globals/config/defaults';
import { getISOStringDate, getSessionFromDate } from '@/presentation/globals/lib/dates';
import { TODAY } from '@/presentation/globals/mocks/tracking';
import { IconBarbellOff } from '@/presentation/globals/components/icons/outline/IconBarbellOff';
import { IconCircle } from '@/presentation/globals/components/icons/outline/IconCircle';
import { IconCircleCheck } from '@/presentation/globals/components/icons/outline/IconCircleCheck';
import { IconCircleOutline } from '@/presentation/globals/components/icons/outline/IconCircleOutline';
import { IconAlarm } from '@/presentation/globals/components/icons/outline/IconAlarm';
import { IconXCircle } from '@/presentation/globals/components/icons/outline/IconXCircle';
import { IconAlertTriangle } from '@/presentation/globals/components/icons/outline/IconAlertTriangle';
import type { IconTypes } from '@/presentation/globals/presentation.types';

export const STATUS_ICONS = {
  completed: IconCircleCheck,
  canceled: IconXCircle,
  current: IconAlarm,
  next: IconCircleOutline,
};

const TRACKS_DAY_RANGES_CLASSES = {
  COMPLETED: 'bg-green-800/10',
  TODAY: 'bg-blue-600/10',
  NEXT: '',
};

function getTrackDayRangeClass(date: Date) {
  const currentDate = getISOStringDate(date);
  const todayDate = getISOStringDate(TODAY);

  if (currentDate === todayDate) {
    return TRACKS_DAY_RANGES_CLASSES.TODAY;
  }
  if (currentDate < todayDate) {
    return TRACKS_DAY_RANGES_CLASSES.COMPLETED;
  }

  return TRACKS_DAY_RANGES_CLASSES.NEXT;
}

function DefaultStatusIcon({ Icon }: { Icon: IconTypes }) {
  return <Icon className="size-5" strokeWidth="1.8" />;
}

function WeekDayTooltip({ date }: { date: Date }) {
  const dayOfWeek = DAYS[(date.getDay() + 1) as DayWeeksType].shortName;
  return (
    <div className="bg-sec after:bg-base absolute bottom-[calc(100%+0.75rem)] left-2 hidden h-fit w-fit rounded-full px-4 group-hover:block after:absolute after:inset-0 after:top-auto after:-bottom-1 after:z-0 after:mx-auto after:size-2 after:rotate-45">
      <span className="block w-fit py-1.5 text-xs leading-none font-medium text-zinc-400">
        {dayOfWeek}
      </span>
    </div>
  );
}

function NextTrainingDayTaskItem({ task, main }: { task: string; main: boolean }) {
  return (
    <div className={`flex items-center ${main ? 'gap-2' : 'gap-1'}`}>
      <IconCircle className={`${main ? 'size-5' : 'size-4'}`} strokeWidth="1" />
      <span className={`font-light ${main ? 'text-lg' : 'text-sm'}`}>{task}</span>
    </div>
  );
}

export function TrackingDay({
  className = '',
  date,
  main = false,
}: {
  className?: string;
  date: Date;
  main?: boolean;
}) {
  const dateString = `${date.toString().split(' ')[1]}, ${date.getDate()}`;
  const session = getSessionFromDate(date);
  const dayTypeClass = getTrackDayRangeClass(date);

  return (
    <article
      className={`group group border-subtle/20 relative flex w-full flex-col rounded-md border transition-colors hover:border-zinc-900 ${main ? 'min-h-54' : 'min-h-48'} ${className} ${dayTypeClass}`}
    >
      <header
        className={`flex items-center justify-between bg-zinc-900/80 ${main ? 'h-10 px-4 text-base' : 'h-8 px-2 text-sm'} group-hover:text-strong rounded-t transition-colors`}
      >
        <span className="text-strong flex-1 cursor-pointer overflow-hidden pr-2 font-medium text-ellipsis whitespace-nowrap hover:text-current/50">
          {session.name}
        </span>
        <aside className="flex items-center gap-1">
          <span className="whitespace-nowrap">{dateString}</span>
          <button type="button" className="h-full cursor-pointer">
            <DefaultStatusIcon Icon={IconAlertTriangle} />
          </button>
        </aside>
      </header>
      <main className="relative flex-1 rounded-b p-2">
        {session.type === 'TRAINING' &&
          (session.status === 'next' || session.status === 'current') && (
            <div className="w-fit p-2">
              {session.exercises.map((exercise, index) => (
                <NextTrainingDayTaskItem key={index} task={exercise.name} main={main} />
              ))}
            </div>
          )}
        {session.type === 'TRAINING' &&
          (session.status === 'completed' || session.status === 'canceled') && (
            <div className="w-fit p-2">
              {session.exercicesDone.map((exercise, index) => (
                <NextTrainingDayTaskItem key={index} task={exercise.name} main={main} />
              ))}
            </div>
          )}
        {session.type === 'REST' && (
          <div className="grid h-full place-content-center p-2">
            <div className="flex flex-col items-center justify-center gap-2 text-current/20 group-hover:text-current">
              <IconBarbellOff
                className="size-20 mask-radial-[100%_100%] mask-radial-from-0% mask-radial-to-150% mask-radial-at-top-left"
                strokeWidth="0.5"
              />
              <span className="font-light">Rest Day</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-[url('/backgrounds/grid.svg')] mask-radial-[50%_50%] mask-radial-from-0% mask-radial-to-250% mask-radial-at-top bg-size-[50px] opacity-[0.05] transition-opacity group-hover:opacity-[0.15]"></div>
      </main>
      <WeekDayTooltip date={date} />
    </article>
  );
}
