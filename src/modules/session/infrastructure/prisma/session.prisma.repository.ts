import { Failure, Success } from '@/shared/domain/result';
import { Session } from '../../domain/session.entity';
import { ISessionRepository } from '../../domain/session.repository';
import { SessionMapper } from '../session.mapper';
import { SessionProps } from '../../domain/session.types';
import { PrismaClient } from '@/prisma/client';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class SessionPrismaRepository implements ISessionRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: InfrastructureErrorTranslator
	) {}
	async create(data: Session) {
		try {
			const sessionPersistence = SessionMapper.toPersistence(data);
			const created = await this.prisma.sessions.create({ data: sessionPersistence });
			const result = SessionMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async update(data: Session) {
		try {
			const sessionPersistence = SessionMapper.toPersistence(data);
			const updated = await this.prisma.sessions.update({
				data: sessionPersistence,
				where: { id: data.id },
			});
			const result = SessionMapper.toDomain(updated);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findAll() {
		try {
			const sessions = await this.prisma.sessions.findMany();
			const sessionsDomain = sessions.map((session) => SessionMapper.toDomain(session));
			return Success(sessionsDomain);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findById(id: SessionProps['id']) {
		try {
			const session = await this.prisma.sessions.findUnique({ where: { id } });
			const result = session ? SessionMapper.toDomain(session) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
}
