import { Icon } from '@/presentation/modules/icon/components/Icon';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { routineDayItemClassConfig } from '@/modules/routine/presentation/ui/routine.ui.config';
import type { DayTypeProps, StatusDayType } from '@/presentation/globals/mocks/routines';

interface DayObjectType {
  title: string;
  icon: IconName;
}

type StatusDayTypes = {
  [K in StatusDayType]: DayObjectType;
};

const STATUS_DAYS: StatusDayTypes = {
  canceled: {
    title: 'Canceled',
    icon: 'octagon-alert',
  },
  completed: {
    title: 'Completed',
    icon: 'check',
  },
  current: {
    title: 'Current Day',
    icon: 'dumbbell',
  },
  next: {
    title: 'Next Day',
    icon: 'calendar-days',
  },
};

const DAY_TYPE_REST = {
  icon: 'bed' as IconName,
};

const getDayAttributes = (status: StatusDayType, type: DayTypeProps) => {
  if (type === 'rest' && status === 'completed')
    return {
      icon: STATUS_DAYS[status].icon,
      title: `${STATUS_DAYS[status].title} - Rest Day`,
    };

  if (type === 'rest')
    return {
      icon: DAY_TYPE_REST.icon,
      title: `${STATUS_DAYS[status].title} - Rest Day`,
    };

  return {
    icon: STATUS_DAYS[status].icon,
    title: `${STATUS_DAYS[status].title} - Training Day`,
  };
};

export function RoutineDayItem({
  name,
  type,
  status,
}: {
  name: string;
  type: DayTypeProps;
  status: StatusDayType;
}) {
  const { title, icon } = getDayAttributes(status, type);

  const className = routineDayItemClassConfig({
    status,
    type,
  });

  return (
    <li className={className} title={title}>
      {name}
      <Icon icon={icon} variant={{ size: 'md', weight: 'moderate' }} />
    </li>
  );
}
