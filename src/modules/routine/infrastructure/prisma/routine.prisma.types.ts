import { sessionIncludeAnatomy } from '@/modules/session/infrastructure/prisma/session.prisma.types';
import type { Prisma } from '@/prisma/client';

export const routineIncludeAnatomy = {
  include: {
    routineDays: {
      include: {
        session: sessionIncludeAnatomy,
      },
    },
    cycleType: true,
  },
} satisfies Prisma.RoutinesDefaultArgs;

export type RoutinePrisma = Prisma.RoutinesGetPayload<typeof routineIncludeAnatomy>;

export type RoutinePrismaCreate = Prisma.RoutinesCreateInput;

export type RoutinePrismaUpdate = Prisma.RoutinesUpdateInput;
