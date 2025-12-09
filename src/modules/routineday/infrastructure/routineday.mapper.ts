import { Prisma, RoutineDays as PrismaRoutineDay } from '@/prisma/client';
import {
	NewRoutineDay,
	RoutineDay as DomainRoutineDay,
	UpdateRoutineDay,
} from '../domain/routineday.entity';
import { RoutineDayProps, UpdateRoutineDayProps } from '../domain/routineday.schema';

export class RoutineDayMapper {
	static toDomain(data: PrismaRoutineDay): DomainRoutineDay {
		const routineDay: RoutineDayProps = {
			id: data.id,
			name: data.name,
			dayNumber: data.dayNumber,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			routineId: data.routineId,
			sessionId: data.sessionId,
		};

		return new DomainRoutineDay(routineDay);
	}
	static toPersistenceCreate(data: NewRoutineDay): Prisma.RoutineDaysCreateManyInput {
		return {
			id: data.id,
			name: data.name,
			dayNumber: data.dayNumber,
			routineId: data.routineId,
			sessionId: data.sessionId,
		};
	}
	static toPersistenceUpdate(data: UpdateRoutineDay): Prisma.RoutineDaysUpdateInput {
		const routineDay: UpdateRoutineDayProps = {};

		if (data.name) routineDay.name = data.name;
		if (data.dayNumber) routineDay.dayNumber = data.dayNumber;

		return routineDay;
	}
}
