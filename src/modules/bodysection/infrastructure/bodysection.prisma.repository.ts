import { prisma } from '@/shared/infrastructure/prisma/client';
import { BodySection } from '../domain/bodysection.entity';
import { IBodySectionRepository } from '../domain/bodysection.repository';
import { BodySectionMapper } from './bodysection.mapper';

export class BodySectionPrismaReporisoty implements IBodySectionRepository {
	async findAll(): Promise<BodySection[]> {
		const bodySections = await prisma.bodySections.findMany();
		const bodySectionsDomain = bodySections.map((bodySection) =>
			BodySectionMapper.toDomain(bodySection)
		);
		return bodySectionsDomain;
	}
	async findById(id: number): Promise<BodySection | null> {
		const bodySection = await prisma.bodySections.findUnique({ where: { id } });
		return bodySection ? BodySectionMapper.toDomain(bodySection) : null;
	}
}
