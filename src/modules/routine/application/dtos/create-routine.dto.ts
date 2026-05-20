import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { SessionProps } from '@/modules/session/domain/session.types';

export type CreateRoutineInput = Omit<CreateDto<RoutineProps>, 'plan' | 'cycle'> & {
  plan: {
    name: RoutineProps['plan'][number]['name'];
    day: RoutineProps['plan'][number]['day'];
    sessionId: SessionProps['id'] | null;
  }[];
  cycleId: RoutineProps['cycle']['id'];
};
