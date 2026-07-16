import type { Prisma } from '../../../prisma/client';

export const TRAINING_STATUS: Prisma.TrainingStatusCreateManyInput[] = [
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
    id: 'ABANDONED',
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
