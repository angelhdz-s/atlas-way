import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { Session } from '@/modules/session/domain/session.entity';
import type { SessionProps } from '@/modules/session/domain/session.types';

export interface ISessionRepository {
  create: (data: Session) => RepositoryResult<Session>;
  update: (data: Session) => RepositoryResult<Session>;
  findAll: () => RepositoryResult<Session[]>;
  findById: (id: SessionProps['id']) => RepositoryResult<Session | null>;
  findByIds: (id: SessionProps['id'][]) => RepositoryResult<Session[]>;
  delete: (id: SessionProps['id']) => RepositoryResult<Session>;
}
