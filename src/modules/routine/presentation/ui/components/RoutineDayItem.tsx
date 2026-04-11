import {
  IconBarbell,
  IconBarbellOff,
  IconCalendarWeek,
  IconCircleCheck,
  IconXCircle,
} from '@/presentation/globals/components/icons/Icons';
import type { DayTypeProps, StatusDayType } from '@/presentation/globals/mocks/routines';
import type { IconTypes } from '@/presentation/globals/presentation.types';
import { routineDayItemClassConfig } from '../routine.ui.config';

interface DayObjectType {
  title: string;
  icon: IconTypes;
}

type StatusDayTypes = {
  [K in StatusDayType]: DayObjectType;
};

const STATUS_DAYS: StatusDayTypes = {
  canceled: {
    title: 'Canceled',
    icon: IconXCircle,
  },
  completed: {
    title: 'Completed',
    icon: IconCircleCheck,
  },
  current: {
    title: 'Current Day',
    icon: IconBarbell,
  },
  next: {
    title: 'Next Day',
    icon: IconCalendarWeek,
  },
};

const DAY_TYPE_REST = {
  icon: IconBarbellOff,
};

const getDayAttributes = (status: StatusDayType, type: DayTypeProps) => {
  if (type === 'rest' && status === 'completed')
    return {
      Icon: STATUS_DAYS[status].icon,
      title: `${STATUS_DAYS[status].title} - Rest Day`,
    };

  if (type === 'rest')
    return {
      Icon: DAY_TYPE_REST.icon,
      title: `${STATUS_DAYS[status].title} - Rest Day`,
    };

  return {
    Icon: STATUS_DAYS[status].icon,
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
  const { title, Icon } = getDayAttributes(status, type);

  const className = routineDayItemClassConfig({
    status,
    type,
  });

  return (
    <li className={className} title={title}>
      {name}
      <Icon className="size-5" strokeWidth="1.5" />
    </li>
  );
}
