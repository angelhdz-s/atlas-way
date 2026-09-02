import type { Prisma } from '../../../prisma/client';

export const WORKOUT_STATUS: Prisma.WorkoutStatusCreateManyInput[] = [
  {
    id: 'PENDING',
    name: 'Pending',
  },
  {
    id: 'TARGETS_SET',
    name: 'Targets set',
  },
  {
    id: 'IN_PROGRESS',
    name: 'In progress',
  },
  {
    id: 'SKIPPED',
    name: 'Pending',
  },
  {
    id: 'INTERRUPTED',
    name: 'Interrupted',
  },
  {
    id: 'COMPLETED',
    name: 'Completed',
  },
];
