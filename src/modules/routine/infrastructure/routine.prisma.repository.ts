import { prisma } from '@/shared/infrastructure/prisma/client';
import { NewRoutine, Routine, UpdateRoutine } from '../domain/routine.entity';
import { IRoutineRepository } from '../domain/routine.repository';
import { RoutineMapper } from './routine.mapper';

export class RoutinePrismaRepository implements IRoutineRepository {
	async create(data: NewRoutine): Promise<Routine> {
		const routinePersistence = RoutineMapper.toPersistenceCreate(data);
		const created = await prisma.routines.create({ data: routinePersistence });
		return RoutineMapper.toDomain(created);
	}
	async update(id: string, data: UpdateRoutine): Promise<Routine> {
		const routinePersistence = RoutineMapper.toPersistenceUpdate(data);
		const created = await prisma.routines.update({ data: routinePersistence, where: { id } });
		return RoutineMapper.toDomain(created);
	}
	async findaAll(): Promise<Routine[]> {
		const routines = await prisma.routines.findMany();
		const routinesDomain = routines.map((routine) => RoutineMapper.toDomain(routine));
		return routinesDomain;
	}
	async findById(id: string): Promise<Routine | null> {
		const routine = await prisma.routines.findUnique({ where: { id } });
		return routine ? RoutineMapper.toDomain(routine) : null;
	}
}
