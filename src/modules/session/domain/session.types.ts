import type { ClassMethods } from '@/shared/shared.types';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { Session } from '@/modules/session/domain/session.entity';

export type SessionProps = {
  readonly id: string;
  name: string;
  description: string | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly userId: UserProps['id'];
  exercises: Exercise[];
};

export type SessionFactoryData = Omit<SessionProps, 'id' | 'createdAt' | 'updatedAt'>;

export type SessionMethods = ClassMethods<Session>;
