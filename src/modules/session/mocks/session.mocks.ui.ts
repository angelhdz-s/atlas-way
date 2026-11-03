import type { SessionLateralPanelDraggableItemProps } from '@/modules/session/presentation/ui/components/SessionLateralPanelDraggableItem';

export const SESSIONS_LATERAL_PANEL_MOCK = [
  {
    name: 'Push day',
    date: 'October 24, 2026',
    exerciseCount: 4,
    href: '#',
  },
  {
    name: 'Pull day',
    date: 'October 24, 2026',
    exerciseCount: 4,
    href: '#',
  },
  {
    name: 'Full body',
    date: 'October 24, 2026',
    exerciseCount: 6,
    href: '#',
  },
  {
    name: 'Leg day',
    date: 'October 24, 2026',
    exerciseCount: 4,
    href: '#',
  },
  {
    name: 'Arm day',
    date: 'October 24, 2026',
    exerciseCount: 4,
    href: '#',
  },
];

type SessionLateralPanelDraggableItemMocks = SessionLateralPanelDraggableItemProps['session'];

export const SESSION_LATERAL_PANEL_DRAGGABLE_MOCK: SessionLateralPanelDraggableItemMocks[] = [
  {
    name: 'Push day',
    exericises: [
      {
        name: 'Push ups',
        sets: 4,
        reps: 12,
      },
      {
        name: 'Dips',
        sets: 4,
        reps: 10,
      },
      {
        name: 'Lateral raises',
        sets: 4,
        reps: 16,
      },
      {
        name: 'Abs',
        sets: 6,
        reps: 20,
      },
    ],
  },
  {
    name: 'Pull day',
    exericises: [
      {
        name: 'Biceps curl',
        sets: 4,
        reps: 12,
      },
      {
        name: 'Forearms curl',
        sets: 4,
        reps: 10,
      },
      {
        name: 'Abs',
        sets: 4,
        reps: 16,
      },
      {
        name: 'Pull ups',
        sets: 6,
        reps: 20,
      },
    ],
  },
  {
    name: 'Legs day',
    exericises: [
      {
        name: 'Bulgarian squads',
        sets: 4,
        reps: 12,
      },
      {
        name: 'Squads',
        sets: 4,
        reps: 10,
      },
      {
        name: 'Heel raises',
        sets: 4,
        reps: 16,
      },
    ],
  },
];
