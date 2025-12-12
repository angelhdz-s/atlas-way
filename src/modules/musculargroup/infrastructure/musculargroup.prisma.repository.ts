import { prisma } from '@/shared/infrastructure/prisma/client';
import { MuscularGroup } from '../domain/musculargroup.entity';
import { IMuscularGroupRepository } from '../domain/musculargroup.repository';
import { MuscularGroupMapper } from './musculargroup.mapper';
import { MuscularGroupProps } from '../domain/musculargroup.schema';

export class MuscularGroupPrismaReporitory implements IMuscularGroupRepository {
	async findAll(): Promise<MuscularGroup[]> {
		const muscularGroups = await prisma.muscularGroups.findMany();
		const muscularGroupsDomain = muscularGroups.map((muscularGroup) =>
			MuscularGroupMapper.toDomain(muscularGroup)
		);

		return muscularGroupsDomain;
	}
	async findById(id: number): Promise<MuscularGroup | null> {
		const muscularGroup = await prisma.muscularGroups.findUnique({ where: { id } });
		return muscularGroup ? MuscularGroupMapper.toDomain(muscularGroup) : null;
	}

	async findAllByBodySectionId(
		id: MuscularGroupProps['bodySectionId']
	): Promise<MuscularGroup[]> {
		const muscularGroups = await prisma.muscularGroups.findMany({
			where: { bodySectionId: id },
		});
		const domainMuscularGroups = muscularGroups.map((muscGroup) =>
			MuscularGroupMapper.toDomain(muscGroup)
		);
		return domainMuscularGroups;
	}
}
