import { prisma } from '@/shared/infrastructure/prisma/client';
import { NewSession, Session, UpdateSession } from '../domain/session.entity';
import { ISessionReporitory } from '../domain/session.repository';
import { SessionProps } from '../domain/session.schema';
import { SessionMapper } from './session.mapper';

export class SessionPrismaRepository implements ISessionReporitory {
	async create(data: NewSession): Promise<Session> {
		const sessionPersistence = SessionMapper.toPersistenceCreate(data);
		const created = await prisma.sessions.create({ data: sessionPersistence });
		return SessionMapper.toDomain(created);
	}
	async update(id: SessionProps['id'], data: UpdateSession): Promise<Session> {
		const sessionPersistence = SessionMapper.toPersistenceUpdate(data);
		const updated = await prisma.sessions.update({ data: sessionPersistence, where: { id } });
		return SessionMapper.toDomain(updated);
	}
	async findAll(): Promise<Session[]> {
		const sessions = await prisma.sessions.findMany();
		const sessionsDomain = sessions.map((session) => SessionMapper.toDomain(session));
		return sessionsDomain;
	}
	async findById(id: SessionProps['id']): Promise<Session | null> {
		const session = await prisma.sessions.findUnique({ where: { id } });
		return session ? SessionMapper.toDomain(session) : null;
	}
}
