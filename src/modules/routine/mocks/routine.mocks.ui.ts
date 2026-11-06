import type { ActiveRoutineData } from '@/modules/routine/presentation/ui/components/ActiveRoutineItem';
import { SESSION_MOCK_OPTIONS } from '@/modules/session/mocks/session.mocks.ui';

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

export const ROUTINE_SCHEDULES_MOCK = [
  {
    name: 'Push, pull, legs',
    description: 'Three days scheduled workout to emphasys push/pull muscles and legs separately',
    active: true,
    weeklySchedule: [
      {
        day: 0,
        session: SESSION_MOCK_OPTIONS[0],
      },
      {
        day: 1,
        session: null,
      },
      {
        day: 2,
        session: SESSION_MOCK_OPTIONS[3],
      },
      {
        day: 3,
        session: null,
      },
      {
        day: 4,
        session: SESSION_MOCK_OPTIONS[2],
      },
      {
        day: 5,
        session: null,
      },
      {
        day: 6,
        session: null,
      },
    ],
  },
  {
    name: 'Full body',
    description: 'Preparing body to fitness life',
    active: false,
    weeklySchedule: [
      {
        day: 0,
        session: SESSION_MOCK_OPTIONS[1],
      },
      {
        day: 1,
        session: null,
      },
      {
        day: 2,
        session: null,
      },
      {
        day: 3,
        session: SESSION_MOCK_OPTIONS[1],
      },
      {
        day: 4,
        session: null,
      },
      {
        day: 5,
        session: null,
      },
      {
        day: 6,
        session: null,
      },
    ],
  },
];
