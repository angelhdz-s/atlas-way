import { prisma } from '@/shared/infrastructure/prisma/client';
import { BodySection, BodySectionWithMuscularGroups } from '../domain/bodysection.entity';
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
	async findAllWithMuscularGroups(): Promise<BodySectionWithMuscularGroups[]> {
		const bodySections = await prisma.bodySections.findMany({
			include: { muscularGroups: {} },
		});

		const domainBodySections: BodySectionWithMuscularGroups[] = bodySections.map(
			(bodySection) => BodySectionMapper.withMuscularGroupsToDomain(bodySection)
		);

		return domainBodySections;
	}
	async findById(id: number): Promise<BodySection | null> {
		const bodySection = await prisma.bodySections.findUnique({ where: { id } });
		return bodySection ? BodySectionMapper.toDomain(bodySection) : null;
	}
}
