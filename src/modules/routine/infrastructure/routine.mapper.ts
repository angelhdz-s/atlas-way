import { Prisma, Routines as PrismaRoutine } from '@/prisma/client';
import { Routine as DomainRoutine, NewRoutine, UpdateRoutine } from '../domain/routine.entity';
import { RoutineProps, UpdateRoutineProps } from '../domain/routine.schema';

export class RoutineMapper {
	static toDomain(data: PrismaRoutine): DomainRoutine {
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

		return new DomainRoutine(routine);
	}

	static toPersistenceCreate(data: NewRoutine): Prisma.RoutinesCreateManyInput {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			initialDate: data.initialDate,
			days: data.days,
			active: data.active,
			userId: data.userId,
			routineCycleId: data.routineCycleId,
		};
	}

	static toPersistenceUpdate(data: UpdateRoutine): Prisma.RoutinesUpdateInput {
		const routine: UpdateRoutineProps = {};

		if (data.name) routine.name = data.name;
		if (data.description) routine.description = data.description;
		if (data.initialDate) routine.initialDate = data.initialDate;
		if (data.days) routine.days = data.days;
		if (data.active) routine.active = data.active;

		return routine;
	}
}
