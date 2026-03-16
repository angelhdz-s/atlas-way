export const CYCLE_TYPES = {
  WEEK: {
    id: 'week',
    name: 'Week',
  },
  CUSTOM: {
    id: 'custom',
    name: 'Custom',
  },
} as const;

export type RoutineCycleId = (typeof CYCLE_TYPES)[keyof typeof CYCLE_TYPES]['id'];
