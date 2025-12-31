import { prisma } from '@/shared/infrastructure/prisma/client';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { Session } from '../../domain/session.entity';
import { ISessionReporitory } from '../../domain/session.repository';
import { SessionMapper } from '../session.mapper';
import { SessionProps } from '../../domain/session.types';

export class SessionPrismaRepository implements ISessionReporitory {
	async create(data: Session) {
		try {
			const sessionPersistence = SessionMapper.toPersistence(data);
			const created = await prisma.sessions.create({ data: sessionPersistence });
			const result = SessionMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create Session"));
		}
	}
	async update(data: Session) {
		try {
			const sessionPersistence = SessionMapper.toPersistence(data);
			const updated = await prisma.sessions.update({
				data: sessionPersistence,
				where: { id: data.id },
			});
			const result = SessionMapper.toDomain(updated);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't update Session"));
		}
	}
	async findAll() {
		try {
			const sessions = await prisma.sessions.findMany();
			const sessionsDomain = sessions.map((session) => SessionMapper.toDomain(session));
			return Success(sessionsDomain);
		} catch {
			return Failure(new PrismaError("Can't create Session"));
		}
	}
	async findById(id: SessionProps['id']) {
		try {
			const session = await prisma.sessions.findUnique({ where: { id } });
			const result = session ? SessionMapper.toDomain(session) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create Session"));
		}
	}
}
