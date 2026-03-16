import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { RoutineProps } from '../../domain/routine.types';
import type { SessionProps } from '@/modules/session/domain/session.types';

export type CreateRoutineInput = Omit<CreateDto<RoutineProps>, 'routineDays' | 'cycle'> & {
  routineDays: {
    name: RoutineProps['routineDays'][number]['name'];
    day: RoutineProps['routineDays'][number]['day'];
    sessionId: SessionProps['id'] | null;
  }[];
  cycleId: RoutineProps['cycle']['id'];
};
