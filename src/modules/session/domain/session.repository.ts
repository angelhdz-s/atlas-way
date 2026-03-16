import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { Session } from './session.entity';
import type { SessionProps } from './session.types';

export interface ISessionRepository {
  create: (data: Session) => RepositoryResult<Session>;
  update: (data: Session) => RepositoryResult<Session>;
  findAll: () => RepositoryResult<Session[]>;
  findById: (id: SessionProps['id']) => RepositoryResult<Session | null>;
  findByIds: (id: SessionProps['id'][]) => RepositoryResult<Session[]>;
}
