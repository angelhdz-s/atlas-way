import { Routines as PrismaRoutine } from '@/prisma/client';
import { Routine } from '../domain/routine.entity';
import { RoutineProps } from '../domain/routine.types';

export class RoutineMapper {
	static toDomain(data: PrismaRoutine): Routine {
		const routine: RoutineProps = {
			id: data.id,
			name: data.name,
			description: data.description,
			initialDate: data.initialDate,
			days: data.days,
			active: data.active,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
			routineCycleId: data.routineCycleId,
		};

		return new Routine(routine);
	}

	static toPersistence(data: Routine): PrismaRoutine {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			initialDate: data.initialDate,
			days: data.days,
			active: data.active,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
			routineCycleId: data.routineCycleId,
		};
	}
}
