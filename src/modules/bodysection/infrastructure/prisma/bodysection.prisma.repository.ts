import { IBodySectionRepository } from '../../domain/bodysection.repository';
import { BodySectionMapper } from '../bodysection.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/globalErrorMapper.container';

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
			return Failure(globalErrorMapper.handle(e));
		}
	}
	async findById(id: number) {
		try {
			const bodySection = await this.prisma.bodySections.findUnique({ where: { id } });
			const result = bodySection ? BodySectionMapper.toDomain(bodySection) : null;
			return Success(result);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
}
