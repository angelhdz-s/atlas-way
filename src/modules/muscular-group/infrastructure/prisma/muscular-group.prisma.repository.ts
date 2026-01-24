import { IMuscularGroupRepository } from '../../domain/muscular-group.repository';
import { MuscularGroupMapper } from '../muscular-group.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { MuscularGroupProps } from '../../domain/muscular-group.types';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/error.mapper';

export class MuscularGroupPrismaReporitory implements IMuscularGroupRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
	) {}
	async findAll() {
		try {
			const muscularGroups = await this.prisma.muscularGroups.findMany();
			const muscularGroupsDomain = muscularGroups.map((muscularGroup) =>
				MuscularGroupMapper.toDomain(muscularGroup)
			);
			return Success(muscularGroupsDomain);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: MuscularGroupProps['id']) {
		try {
			const muscularGroup = await this.prisma.muscularGroups.findUnique({ where: { id } });
			const result = muscularGroup ? MuscularGroupMapper.toDomain(muscularGroup) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
