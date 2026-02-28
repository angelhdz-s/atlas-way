import {
  CircleOutline,
  SolidCircleCheck,
  SolidCircleX,
} from '@/presentation/globals/components/Icons';
import { WEEK_DAYS } from '@/presentation/globals/constants/date';
import {
  getNextDates,
  getSessionFromDate,
} from '@/presentation/globals/lib/dates';
import type { StatusDayType } from '@/presentation/globals/mocks/routines';
import { TODAY } from '@/presentation/globals/mocks/tracking';
import type {
  IconTypes,
  SolidIconTypes,
} from '@/presentation/globals/types';
import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import { getStatusTextColorClass } from '@/presentation/globals/lib/get-classes';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';

const ICON_SIZE_CLASS = 'size-7';

type CurrentWeekStatusDays = {
  day: number;
  status: StatusDayType;
  title: string;
};

function getCurrentWeekStatusDays(): CurrentWeekStatusDays[] {
  const dates: CurrentWeekStatusDays[] = [];

  const dayOfTheWeek = TODAY.getDay(); // 1 - 7

  const dateCopy = new Date(TODAY);

  const newInitialDate = new Date(
    dateCopy.setDate(TODAY.getDate() - dayOfTheWeek)
  );

  const datesArr = [
    newInitialDate,
    ...getNextDates(newInitialDate, 6),
  ];

  datesArr.forEach((date) => {
    const { status, name } = getSessionFromDate(date);
    dates.push({ day: date.getDay(), status, title: name });
  });

  return dates;
}

function StatusDayIcon({
  className = '',
  icon: Icon,
}: {
  className: string;
  icon: IconTypes;
}) {
  return (
    <Icon
      className={`${ICON_SIZE_CLASS} ${className}`}
      strokeWidth="1.5"
    />
  );
}

function StatusDaySolidIcon({
  className = '',
  icon: Icon,
}: {
  className?: string;
  icon: SolidIconTypes;
}) {
  return (
    <Icon className={`${ICON_SIZE_CLASS} ${className}`} />
  );
}

function StatusDay({
  status,
  className,
}: {
  status: StatusDayType;
  className?: string;
}) {
  if (status === 'completed')
    return (
      <span className={` ${className}`}>
        <StatusDaySolidIcon
          className="fg-complete"
          icon={SolidCircleCheck}
        />
      </span>
    );

  if (status === 'canceled')
    return (
      <span className={` ${className}`}>
        <StatusDaySolidIcon
          className="fg-cancel"
          icon={SolidCircleX}
        />
      </span>
    );

  if (status === 'current')
    return (
      <span className={` ${className}`}>
        <StatusDayIcon
          className="fg-accent"
          icon={CircleOutline}
        />
      </span>
    );

  // default return if status === "next"
  return (
    <span className={`${className}`}>
      <StatusDayIcon
        className="text-default/25"
        icon={CircleOutline}
      />
    </span>
  );
}

export function CurrentWeekStatus({
  className = '',
}: {
  className?: string;
}) {
  const currentWeekStatusDays = getCurrentWeekStatusDays();

  return (
    <Card className={`flex flex-col ${className}`}>
      <header>
        <CardTitle title="Week" />
      </header>
      <main className="flex items-center justify-center gap-2">
        {currentWeekStatusDays.map(
          ({ day, status, title }) => {
            const dayName = WEEK_DAYS[day].initial;
            const className =
              getStatusTextColorClass(status);
            return (
              <div
                key={day}
                className="flex flex-col justify-center"
                title={title}
              >
                <span
                  className={`text-center text-sm font-black ${className || 'text-default/75'}`}
                >
                  {dayName}
                </span>
                <StatusDay status={status} />
              </div>
            );
          }
        )}
      </main>
    </Card>
  );
}
