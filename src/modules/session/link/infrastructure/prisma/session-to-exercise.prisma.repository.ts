import { PrismaClient } from '@/prisma/client';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';
import { SessionToExercise } from '../../domain/session-to-exercise.entity';
import { SessionToExerciseMapper } from '../session-to-exercise.mapper';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';

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
		} catch {
			return Failure(new PrismaError("Can't create Session-Exercise"));
		}
	}
	async findAll() {
		try {
			const sessions = await this.prisma.sessionsToExercises.findMany();
			const sessionsDomain = sessions.map((session) =>
				SessionToExerciseMapper.toDomain(session)
			);
			return Success(sessionsDomain);
		} catch {
			return Failure(new PrismaError("Can't find all Sessions-Exercises"));
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
		} catch {
			return Failure(new PrismaError("Can't list Session-Exercise by Session id"));
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
		} catch {
			return Failure(new PrismaError("Can't list Session-Exercise by Exercise id"));
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
		} catch {
			return Failure(new PrismaError("Can't find Session-Exercise by ids"));
		}
	}
}
