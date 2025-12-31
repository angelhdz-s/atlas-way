import { prisma } from '@/shared/infrastructure/prisma/client';
import { IRoutineDaysRepository } from '../../domain/routinedays.resporitory';
import { RoutineDaysProps } from '../../domain/routinedays.types';
import { RoutineDaysMapper } from '../routinedays.mapper';
import { RoutineDays } from '../../domain/routinedays.entity';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';

export class RoutineDayPrismaRepository implements IRoutineDaysRepository {
	async create(data: RoutineDays) {
		try {
			const routineDayPersistence = RoutineDaysMapper.toPersistence(data);
			const created = await prisma.routineDays.create({ data: routineDayPersistence });
			const result = RoutineDaysMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create Routine Days"));
		}
	}
	async update(data: RoutineDays) {
		try {
			const routineDayPersistence = RoutineDaysMapper.toPersistence(data);
			const updated = await prisma.routineDays.update({
				data: routineDayPersistence,
				where: { id: routineDayPersistence.id },
			});
			const result = RoutineDaysMapper.toDomain(updated);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't update Routine Days"));
		}
	}
	async findAll() {
		try {
			const routineDays = await prisma.routineDays.findMany();
			const routineDaysDomain = routineDays.map((routineDay) =>
				RoutineDaysMapper.toDomain(routineDay)
			);
			return Success(routineDaysDomain);
		} catch {
			return Failure(new PrismaError("Can't find all Routine Days"));
		}
	}
	async findById(id: RoutineDaysProps['id']) {
		try {
			const routineDay = await prisma.routineDays.findUnique({ where: { id } });
			const result = routineDay ? RoutineDaysMapper.toDomain(routineDay) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't find Routine Days by id"));
		}
	}
}
