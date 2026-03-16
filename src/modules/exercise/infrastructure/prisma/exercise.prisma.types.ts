import { muscleAnatomyInclude } from '@/modules/muscle/infrastructure/prisma/muscle.prisma.types';
import type { Prisma } from '@/prisma/client';

export const exerciseIncludeAnatomy = {
  include: {
    exercisesToMuscles: {
      include: { muscle: muscleAnatomyInclude },
    },
  },
} satisfies Prisma.ExercisesDefaultArgs;

export type ExercisePrisma = Prisma.ExercisesGetPayload<typeof exerciseIncludeAnatomy>;

export type ExercisePrismaUpdate = Prisma.ExercisesUpdateInput;

export type ExercisePrismaCreate = Prisma.ExercisesCreateInput;
