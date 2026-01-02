import { prisma } from '@/shared/infrastructure/prisma/client';
import { IRoutineRepository } from '../../domain/routine.repository';
import { RoutineMapper } from '../routine.mapper';
import { Routine } from '../../domain/routine.entity';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';

export class RoutinePrismaRepository implements IRoutineRepository {
	async create(data: Routine) {
		const routinePersistence = RoutineMapper.toPersistence(data);
		try {
			const created = await prisma.routines.create({ data: routinePersistence });
			const result = RoutineMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create Routine"));
		}
	}
	async update(data: Routine) {
		const routinePersistence = RoutineMapper.toPersistence(data);
		try {
			const created = await prisma.routines.update({
				data: routinePersistence,
				where: { id: routinePersistence.id },
			});
			const result = RoutineMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't update Routine"));
		}
	}
	async findaAll() {
		try {
			const routines = await prisma.routines.findMany();
			const routinesDomain = routines.map((routine) => RoutineMapper.toDomain(routine));
			return Success(routinesDomain);
		} catch {
			return Failure(new PrismaError("Can't find all Routines"));
		}
	}
	async findById(id: string) {
		try {
			const routine = await prisma.routines.findUnique({ where: { id } });
			const result = routine ? RoutineMapper.toDomain(routine) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't find Routine by id"));
		}
	}
}
