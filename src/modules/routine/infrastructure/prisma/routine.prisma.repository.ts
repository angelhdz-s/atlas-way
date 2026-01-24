import { IRoutineRepository } from '../../domain/routine.repository';
import { RoutineMapper } from '../routine.mapper';
import { Routine } from '../../domain/routine.entity';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/errors/error.mapper';

export class RoutinePrismaRepository implements IRoutineRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
	) {}
	async create(data: Routine) {
		const routinePersistence = RoutineMapper.toPersistence(data);
		try {
			const created = await this.prisma.routines.create({ data: routinePersistence });
			const result = RoutineMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async update(data: Routine) {
		const routinePersistence = RoutineMapper.toPersistence(data);
		try {
			const created = await this.prisma.routines.update({
				data: routinePersistence,
				where: { id: routinePersistence.id },
			});
			const result = RoutineMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findaAll() {
		try {
			const routines = await this.prisma.routines.findMany();
			const routinesDomain = routines.map((routine) => RoutineMapper.toDomain(routine));
			return Success(routinesDomain);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: string) {
		try {
			const routine = await this.prisma.routines.findUnique({ where: { id } });
			const result = routine ? RoutineMapper.toDomain(routine) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
