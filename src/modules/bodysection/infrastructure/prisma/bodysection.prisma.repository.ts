import { IBodySectionRepository } from '../../domain/bodysection.repository';
import { BodySectionMapper } from '../bodysection.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';

export class BodySectionPrismaReporisoty implements IBodySectionRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async findAll() {
		try {
			const bodySections = await this.prisma.bodySections.findMany();
			const bodySectionsDomain = bodySections.map((bodySection) =>
				BodySectionMapper.toDomain(bodySection)
			);
			return Success(bodySectionsDomain);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}
	async findById(id: number) {
		try {
			const bodySection = await this.prisma.bodySections.findUnique({ where: { id } });
			const result = bodySection ? BodySectionMapper.toDomain(bodySection) : null;
			return Success(result);
		} catch (e) {
			return Failure(GlobalErrorMapper.toDomainError(e));
		}
	}
}
