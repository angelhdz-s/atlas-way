import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  days: [
    {
      day: 0;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 1;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 2;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 3;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 4;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 5;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
    {
      day: 6;
      isCompleted: boolean;
      hasWorkout: boolean;
    },
  ];
};

const WEEK_DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function WeekActivity({ className, days }: Props) {
  return (
    <div className={twMerge('space-y-2', className)}>
      <ul className="flex items-center gap-2">
        {days.map(({ day, isCompleted, hasWorkout }) => (
          <li key={`week-activity-day-${day}`} className="w-full space-y-2">
            <main className="text-txt-base-body flex w-full items-center gap-2">
              <p className="body-medium flex-1">{WEEK_DAY_NAMES[day] ?? 'Day'}</p>
              {isCompleted && <Icon icon="check" variant={{ size: 'sm', weight: 'thin' }} />}
            </main>
            <div className="bg-sf-base-default border-bd-base-default grid h-12 w-full place-content-center rounded-lg border">
              {hasWorkout && (
                <Icon
                  variant={{ size: 'sm', weight: 'thin' }}
                  icon="dumbbell"
                  className="text-txt-success-default"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
