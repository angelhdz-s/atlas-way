import { prisma } from '@/shared/infrastructure/prisma/client';
import { NewRoutineDay, RoutineDay, UpdateRoutineDay } from '../domain/routineday.entity';
import { IRoutineDayRepository } from '../domain/routineday.resporitory';
import { RoutineDayProps } from '../domain/routineday.schema';
import { RoutineDayMapper } from './routineday.mapper';

export class RoutineDayPrismaRepository implements IRoutineDayRepository {
	async create(data: NewRoutineDay): Promise<RoutineDay> {
		const routineDayPersistence = RoutineDayMapper.toPersistenceCreate(data);
		const created = await prisma.routineDays.create({ data: routineDayPersistence });
		return RoutineDayMapper.toDomain(created);
	}
	async update(id: RoutineDayProps['id'], data: UpdateRoutineDay): Promise<RoutineDay> {
		const routineDayPersistence = RoutineDayMapper.toPersistenceUpdate(data);
		const updated = await prisma.routineDays.update({
			data: routineDayPersistence,
			where: { id },
		});
		return RoutineDayMapper.toDomain(updated);
	}
	async findAll(): Promise<RoutineDay[]> {
		const routineDays = await prisma.routineDays.findMany();
		const routineDaysDomain = routineDays.map((routineDay) =>
			RoutineDayMapper.toDomain(routineDay)
		);
		return routineDaysDomain;
	}
	async findById(id: RoutineDayProps['id']): Promise<RoutineDay | null> {
		const routineDay = await prisma.routineDays.findUnique({ where: { id } });
		return routineDay ? RoutineDayMapper.toDomain(routineDay) : null;
	}
}
