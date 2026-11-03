import { Button } from '@/presentation/modules/button/components/Button';
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
          <article className="bg-sf-base-default border-bd-base-default h-full cursor-grab rounded-sm border p-2">
            <div className="flex items-center gap-2">
              <Icon icon="grip-vertical" variant={{ size: 'sm', weight: 'thin' }} />
              <span className="flex-1">{session.name}</span>
              <Button
                variant={{ type: 'icon', size: 'sm', color: 'simple' }}
                aria-label="Remove session"
              >
                <Icon icon="x" variant={{ size: 'sm', weight: 'thin' }} />
              </Button>
            </div>
          </article>
        ) : (
          <div className="relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2">
            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute h-full w-full"
              preserveAspectRatio="none"
              aria-hidden={true}
            >
              <rect
                x={1}
                y={1}
                width="98"
                height="98"
                fill="none"
                strokeDasharray="8, 8"
                strokeDashoffset="0"
                strokeWidth={1.5}
                strokeLinecap="round"
                vectorEffect={'non-scaling-stroke'}
                className="stroke-bd-base-subtle"
              />
            </svg>
            <div className="text-txt-base-caption flex flex-col items-center justify-center">
              <Icon
                icon="plus"
                variant={{ size: 'sm', weight: 'thin' }}
                className="text-ic-base-caption"
              />
              <span className="caption flex-1 text-center text-pretty">
                Drag and drop your session here
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
