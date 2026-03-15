import { exerciseIncludeAnatomy } from '@/modules/exercise/infrastructure/prisma/exercise.prisma.types';
import type { Prisma } from '@/prisma/client';

export const sessionIncludeAnatomy = {
  include: {
    sessionToExercise: {
      include: {
        exercise: exerciseIncludeAnatomy,
      },
    },
  },
} satisfies Prisma.SessionsDefaultArgs;

export type SessionPrisma = Prisma.SessionsGetPayload<typeof sessionIncludeAnatomy>;

export type SessionPrismaCreate = Prisma.SessionsCreateInput;

export type SessionPrismaUpdate = Prisma.SessionsUpdateInput;
