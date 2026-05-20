import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';

export type RoutineDTO = Omit<RoutineProps, 'updatedAt' | 'plan'> & {
  plan: {
    name: RoutineProps['plan'][number]['name'];
    day: RoutineProps['plan'][number]['day'];
    session: SessionDTO | null;
  }[];
};
