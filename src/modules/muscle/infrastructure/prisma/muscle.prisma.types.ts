import type { Prisma } from '@/prisma/client';
import type { MusclesGetPayload } from '@/prisma/models';

export const muscleAnatomyInclude = {
  include: {
    muscularGroup: {
      include: {
        bodySection: true,
      },
    },
  },
} satisfies Prisma.MusclesDefaultArgs;

export type MusclePrisma = MusclesGetPayload<typeof muscleAnatomyInclude>;
