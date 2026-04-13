import type { UpdateDto } from '@/shared/application/dtos/create.types';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { SessionProps } from '@/modules/session/domain/session.types';

type UpdateProps = Pick<RoutineProps, 'name' | 'description' | 'active' | 'days' | 'initialDate'>;
export type UpdateRoutineInput = UpdateDto<UpdateProps> & {
  routineDays?: {
    name: RoutineProps['routineDays'][number]['name'];
    day: RoutineProps['routineDays'][number]['day'];
    sessionId: SessionProps['id'] | null;
  }[];
  cycleId?: RoutineProps['cycle']['id'];
};
