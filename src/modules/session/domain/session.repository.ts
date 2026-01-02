import { RepositoryResult } from '@/shared/domain/repository.result';
import { Session } from './session.entity';
import { SessionProps } from './session.types';

export interface ISessionReporitory {
	create: (data: Session) => RepositoryResult<Session>;
	update: (data: Session) => RepositoryResult<Session>;
	findAll: () => RepositoryResult<Session[]>;
	findById: (id: SessionProps['id']) => RepositoryResult<Session | null>;
}
