import type { ActiveRoutineData } from '@/modules/routine/presentation/ui/components/ActiveRoutineItem';

export const ACTIVE_ROUTINES_MOCK: ActiveRoutineData[] = [
  {
    name: 'Push, pull, legs',
    date: 'October 24, 2026',
    daysWithSessions: [0, 2, 4],
    description: 'Workout schedule focused on three days routine',
  },
  {
    name: 'Full body',
    date: 'October 24, 2026',
    daysWithSessions: [0, 3],
    description: 'Single session routine for full body improvement',
  },
  {
    name: 'Push, pull, legs soft',
    date: 'October 24, 2026',
    daysWithSessions: [0, 1, 2, 3, 4],
    description: 'Push, pull, legs schedule but days only have at most three exercises',
  },
];
