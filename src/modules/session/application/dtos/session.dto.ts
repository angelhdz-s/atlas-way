import { SessionProps } from '../../domain/session.types';

export type SessionDTO = Pick<SessionProps, 'id' | 'name' | 'description' | 'createdAt'>;
