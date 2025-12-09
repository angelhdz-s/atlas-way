import { NewSession, Session, UpdateSession } from './session.entity';
import { SessionProps } from './session.schema';

export interface ISessionReporitory {
	create: (data: NewSession) => Promise<Session>;
	update: (id: SessionProps['id'], data: UpdateSession) => Promise<Session>;
	findAll: () => Promise<Session[]>;
	findById: (id: SessionProps['id']) => Promise<Session | null>;
}
