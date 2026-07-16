import type { Prisma } from '../../../prisma/client';

export const STATUS: Prisma.StatusCreateManyInput[] = [
  {
    id: 'COMPLETED',
    name: 'Completed',
  },
  {
    id: 'CANCELED',
    name: 'Canceled',
  },
  {
    id: 'PENDING',
    name: 'Pending',
  },
  {
    id: 'IN_PROGRESS',
    name: 'In progress',
  },
];
