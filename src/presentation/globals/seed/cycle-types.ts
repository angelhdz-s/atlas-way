import type { RoutineCycleId } from '../../../modules/routine/domain/constants/routine.constants.cycle-types';
import type { Prisma } from '../../../prisma/client';

type RoutineCycle<T extends RoutineCycleId> = {
  id: T;
  name: string;
};

type RoutineCycleTypeSeed = [RoutineCycle<'week'>, RoutineCycle<'custom'>];

export const ROUTINE_CYCLES: Prisma.RoutineCycleTypesCreateManyInput[] = [
  {
    id: 'week',
    name: 'Week',
  },
  {
    id: 'custom',
    name: 'Custom',
  },
] satisfies RoutineCycleTypeSeed;
