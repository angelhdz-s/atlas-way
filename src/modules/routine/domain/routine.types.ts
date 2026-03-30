import type { Session } from '@/modules/session/domain/session.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { RoutineCycleId } from './constants/routine.constants.cycle-types';

export type RoutineProps = {
  readonly id: string;
  name: string;
  description: string | null;
  active: boolean;
  days: number;
  initialDate: Date;
  cycle: {
    readonly id: RoutineCycleId;
    readonly name: string;
  };
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: UserProps['id'];
  routineDays: {
    id: string;
    name: string;
    day: number;
    session: Session | null;
  }[];
};
