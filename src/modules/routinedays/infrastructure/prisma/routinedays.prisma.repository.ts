import { IRoutineDaysRepository } from '../../domain/routinedays.resporitory';
import { RoutineDaysProps } from '../../domain/routinedays.types';
import { RoutineDaysMapper } from '../routinedays.mapper';
import { RoutineDays } from '../../domain/routinedays.entity';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';

export class RoutineDaysPrismaRepository implements IRoutineDaysRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
	) {}
	async create(data: RoutineDays) {
		try {
			const routineDayPersistence = RoutineDaysMapper.toPersistence(data);
			const created = await this.prisma.routineDays.create({ data: routineDayPersistence });
			const result = RoutineDaysMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async update(data: RoutineDays) {
		try {
			const routineDayPersistence = RoutineDaysMapper.toPersistence(data);
			const updated = await this.prisma.routineDays.update({
				data: routineDayPersistence,
				where: { id: routineDayPersistence.id },
			});
			const result = RoutineDaysMapper.toDomain(updated);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findAll() {
		try {
			const routineDays = await this.prisma.routineDays.findMany();
			const routineDaysDomain = routineDays.map((routineDay) =>
				RoutineDaysMapper.toDomain(routineDay)
			);
			return Success(routineDaysDomain);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: RoutineDaysProps['id']) {
		try {
			const routineDay = await this.prisma.routineDays.findUnique({ where: { id } });
			const result = routineDay ? RoutineDaysMapper.toDomain(routineDay) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
