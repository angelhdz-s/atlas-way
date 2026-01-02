import { prisma } from '@/shared/infrastructure/prisma/client';
import { IMuscularGroupRepository } from '../../domain/musculargroup.repository';
import { MuscularGroupMapper } from '../musculargroup.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { MuscularGroupProps } from '../../domain/musculargroup.types';

export class MuscularGroupPrismaReporitory implements IMuscularGroupRepository {
	async findAll() {
		try {
			const muscularGroups = await prisma.muscularGroups.findMany();
			const muscularGroupsDomain = muscularGroups.map((muscularGroup) =>
				MuscularGroupMapper.toDomain(muscularGroup)
			);
			return Success(muscularGroupsDomain);
		} catch {
			return Failure(new PrismaError("Can't find all Muscular Groups"));
		}
	}
	async findById(id: MuscularGroupProps['id']) {
		try {
			const muscularGroup = await prisma.muscularGroups.findUnique({ where: { id } });
			const result = muscularGroup ? MuscularGroupMapper.toDomain(muscularGroup) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't find Musulcar Group by id"));
		}
	}
}
