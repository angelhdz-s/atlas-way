import { prisma } from '@/shared/infrastructure/prisma/client';
import { IBodySectionRepository } from '../../domain/bodysection.repository';
import { BodySectionMapper } from '../bodysection.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';

export class BodySectionPrismaReporisoty implements IBodySectionRepository {
	async findAll() {
		try {
			const bodySections = await prisma.bodySections.findMany();
			const bodySectionsDomain = bodySections.map((bodySection) =>
				BodySectionMapper.toDomain(bodySection)
			);
			return Success(bodySectionsDomain);
		} catch {
			return Failure(new PrismaError('Error fetching bodysections'));
		}
	}
	async findById(id: number) {
		try {
			const bodySection = await prisma.bodySections.findUnique({ where: { id } });
			const result = bodySection ? BodySectionMapper.toDomain(bodySection) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError('Error fetching bodysections'));
		}
	}
}
