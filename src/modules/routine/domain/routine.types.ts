import type { ClassMethods } from '@/shared/shared.types';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { Session } from '@/modules/session/domain/session.entity';
import type { RoutineCycleId } from '@/modules/routine/domain/constants/routine.constants.cycle-types';
import type { Routine } from '@/modules/routine/domain/routine.entity';

export type RoutineDay = {
  id: string;
  name: string;
  day: number;
  session: Session | null;
};

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
  routineDays: RoutineDay[];
};

export type RoutineFactoryData = Omit<RoutineProps, 'id' | 'createdAt' | 'updatedAt' | 'cycle'> & {
  cycleId: string;
};

export type RoutineMethods = ClassMethods<Routine>;
