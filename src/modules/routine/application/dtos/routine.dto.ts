import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';

export type RoutineDTO = Omit<RoutineProps, 'updatedAt' | 'routineDays'> & {
  routineDays: {
    name: RoutineProps['routineDays'][number]['name'];
    day: RoutineProps['routineDays'][number]['day'];
    session: SessionDTO | null;
  }[];
};
