import { PrismaClient } from '@/prisma/client';
import { Failure, Success } from '@/shared/domain/result';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';
import { SessionToExercise } from '../../domain/session-to-exercise.entity';
import { SessionToExerciseMapper } from '../session-to-exercise.mapper';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class SessionToExercisePrismaRepository implements ISessionToExerciseRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: InfrastructureErrorTranslator
	) {}
	async create(data: SessionToExercise) {
		try {
			const sessionPersistence = SessionToExerciseMapper.toPersistence(data);
			const created = await this.prisma.sessionsToExercises.create({
				data: sessionPersistence,
			});
			const result = SessionToExerciseMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findAll() {
		try {
			const sessions = await this.prisma.sessionsToExercises.findMany();
			const sessionsDomain = sessions.map((session) =>
				SessionToExerciseMapper.toDomain(session)
			);
			return Success(sessionsDomain);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async listBySessionId(sessionId: SessionToExerciseProps['sessionId']) {
		try {
			const sessions = await this.prisma.sessionsToExercises.findMany({
				where: { sessionId },
			});
			const sessionsDomain = sessions.map((session) =>
				SessionToExerciseMapper.toDomain(session)
			);
			return Success(sessionsDomain);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async listByExerciseId(exerciseId: SessionToExerciseProps['exerciseId']) {
		try {
			const sessions = await this.prisma.sessionsToExercises.findMany({
				where: { exerciseId },
			});
			const sessionsDomain = sessions.map((session) =>
				SessionToExerciseMapper.toDomain(session)
			);
			return Success(sessionsDomain);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}

	async findBySessionAndExerciseId({
		sessionId,
		exerciseId,
	}: {
		sessionId: SessionToExerciseProps['sessionId'];
		exerciseId: SessionToExerciseProps['exerciseId'];
	}) {
		try {
			const session = await this.prisma.sessionsToExercises.findUnique({
				where: {
					sessionId_exerciseId: {
						sessionId,
						exerciseId,
					},
				},
			});
			const result = session ? SessionToExerciseMapper.toDomain(session) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
}
