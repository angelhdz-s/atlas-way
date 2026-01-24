import { IBodySectionRepository } from '../../domain/body-section.repository';
import { BodySectionMapper } from '../body-section.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/error.mapper';

export class BodySectionPrismaReporisoty implements IBodySectionRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
	) {}
	async findAll() {
		try {
			const bodySections = await this.prisma.bodySections.findMany();
			const bodySectionsDomain = bodySections.map((bodySection) =>
				BodySectionMapper.toDomain(bodySection)
			);
			return Success(bodySectionsDomain);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: number) {
		try {
			const bodySection = await this.prisma.bodySections.findUnique({ where: { id } });
			const result = bodySection ? BodySectionMapper.toDomain(bodySection) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
