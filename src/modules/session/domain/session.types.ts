import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { UserProps } from '@/modules/user/domain/user.types';

export type SessionProps = {
  readonly id: string;
  name: string;
  description: string | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: UserProps['id'];
  readonly exercises: Exercise[];
};
