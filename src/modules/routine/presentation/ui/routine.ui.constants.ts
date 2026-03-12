type RoutineFormConfig = {
  defaultCycle: {
    value: 'week' | 'custom';
    label: string;
  };
};

export const routineFormConfig: RoutineFormConfig = {
  defaultCycle: {
    value: 'week',
    label: 'Week',
  },
};

export const DEFAULT_WEEK_CYCLE_DAYS_DATA = [
  {
    value: 'sunday',
    label: 'Sun',
  },
  {
    value: 'monday',
    label: 'Mon',
  },
  {
    value: 'tuesday',
    label: 'Tue',
  },
  {
    value: 'wednesday',
    label: 'Wed',
  },
  {
    value: 'thursday',
    label: 'Tue',
  },
  {
    value: 'friday',
    label: 'Friday',
  },
  {
    value: 'saturday',
    label: 'Saturday',
  },
];
