import { WEEK_DAYS } from '@/presentation/globals/constants/date';
import { getNextDates, getSessionFromDate } from '@/presentation/globals/lib/dates';
import { TODAY } from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { getStatusTextColorClass } from '@/presentation/globals/lib/get-classes';
import { Card } from '@/presentation/modules/card/components/Card';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import type { StatusDayType } from '@/presentation/globals/mocks/routines';

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

  const newInitialDate = new Date(dateCopy.setDate(TODAY.getDate() - dayOfTheWeek));

  const datesArr = [newInitialDate, ...getNextDates(newInitialDate, 6)];

  datesArr.forEach((date) => {
    const { status, name } = getSessionFromDate(date);
    dates.push({ day: date.getDay(), status, title: name });
  });

  return dates;
}

function StatusDayIcon({ className = '', icon }: { className?: string; icon: IconName }) {
  return (
    <Icon
      icon={icon}
      className={`${ICON_SIZE_CLASS} ${className}`}
      variant={{ weight: 'moderate' }}
    />
  );
}

function StatusDay({ status, className }: { status: StatusDayType; className?: string }) {
  if (status === 'completed')
    return (
      <span className={` ${className}`}>
        <StatusDayIcon className="text-success" icon="check" />
      </span>
    );

  if (status === 'canceled')
    return (
      <span className={` ${className}`}>
        <StatusDayIcon className="text-danger" icon="octagon-alert" />
      </span>
    );

  if (status === 'current')
    return (
      <span className={` ${className}`}>
        <StatusDayIcon className="text-accent" icon="circle-dot-dashed" />
      </span>
    );

  // default return if status === "next"
  return (
    <span className={`${className}`}>
      <StatusDayIcon className="text-fg-default/25" icon="circle-dot" />
    </span>
  );
}

export function CurrentWeekStatus({ className = '' }: { className?: string }) {
  const currentWeekStatusDays = getCurrentWeekStatusDays();

  return (
    <Card border="highlighted" className={`flex flex-col ${className}`}>
      <header>
        <CardTitle icon="calendar-days" title="Week" />
      </header>
      <main className="flex items-center justify-center gap-2">
        {currentWeekStatusDays.map(({ day, status, title }) => {
          if (!WEEK_DAYS[day]) return null;
          const dayName = WEEK_DAYS[day].initial ?? 'Day';
          const className = getStatusTextColorClass(status);
          return (
            <div key={day} className="flex flex-col justify-center" title={title}>
              <span
                className={`text-center text-sm font-black ${className || 'text-fg-default/75'}`}
              >
                {dayName}
              </span>
              <StatusDay status={status} />
            </div>
          );
        })}
      </main>
    </Card>
  );
}
