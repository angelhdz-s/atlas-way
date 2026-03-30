import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { UserProps } from '@/modules/user/domain/user.types';

export type ExerciseProps = {
  readonly id: string;
  name: string;
  description: string | null;
  sets: number;
  reps: number;
  weight: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: UserProps['id'];
  readonly muscles: Muscle[];
};
