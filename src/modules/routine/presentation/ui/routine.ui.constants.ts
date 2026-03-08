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
