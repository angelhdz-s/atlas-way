import { RoutineDays as PrismaRoutineDays } from '@/prisma/client';
import { RoutineDays } from '../domain/routine-days.entity';
import { RoutineDaysProps } from '../domain/routine-days.types';
import { RoutineDaysDTO } from '../application/dtos/routine-days.dto';

export class RoutineDaysMapper {
	static toDomain(data: PrismaRoutineDays): RoutineDays {
		const routineDay: RoutineDaysProps = {
			id: data.id,
			name: data.name,
			dayNumber: data.dayNumber,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			routineId: data.routineId,
			sessionId: data.sessionId,
		};

		return new RoutineDays(routineDay);
	}
	static toPersistence(data: RoutineDays): PrismaRoutineDays {
		return {
			id: data.id,
			name: data.name,
			dayNumber: data.dayNumber,
			routineId: data.routineId,
			sessionId: data.sessionId,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
	}

	static toDTO(data: RoutineDays): RoutineDaysDTO {
		return {
			id: data.id,
			name: data.name,
			dayNumber: data.dayNumber,
		};
	}
}
