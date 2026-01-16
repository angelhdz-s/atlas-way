import { PrismaClient } from '@/prisma/client';
import { Failure, Success } from '@/shared/domain/result';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';
import { SessionToExercise } from '../../domain/session-to-exercise.entity';
import { SessionToExerciseMapper } from '../session-to-exercise.mapper';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';

export class SessionToExercisePrismaRepository implements ISessionToExerciseRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async create(data: SessionToExercise) {
		try {
			const sessionPersistence = SessionToExerciseMapper.toPersistence(data);
			const created = await this.prisma.sessionsToExercises.create({
				data: sessionPersistence,
			});
			const result = SessionToExerciseMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
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
			return Failure(GlobalErrorMapper.toDomainError(e));
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
			return Failure(GlobalErrorMapper.toDomainError(e));
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
			return Failure(GlobalErrorMapper.toDomainError(e));
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
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}
}
