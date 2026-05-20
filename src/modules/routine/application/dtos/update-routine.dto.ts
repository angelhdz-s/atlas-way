import type { UpdateDto } from '@/shared/application/dtos/create.types';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { SessionProps } from '@/modules/session/domain/session.types';

type UpdateProps = Pick<RoutineProps, 'name' | 'description' | 'active' | 'days' | 'initialDate'>;
export type UpdateRoutineInput = UpdateDto<UpdateProps> & {
  plan?: {
    name: RoutineProps['plan'][number]['name'];
    day: RoutineProps['plan'][number]['day'];
    sessionId: SessionProps['id'] | null;
  }[];
  cycleId?: RoutineProps['cycle']['id'];
};
