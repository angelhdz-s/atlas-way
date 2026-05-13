import type { ClassMethods } from '@/shared/shared.types';
import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';

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
  muscles: Muscle[];
};

export type ExerciseFactoryData = Omit<ExerciseProps, 'id' | 'createdAt' | 'updatedAt'>;

export type ExerciseMethods = ClassMethods<Exercise>;
