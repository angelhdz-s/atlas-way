import { GetAllBodySections } from '@/modules/body-section/application/use-cases/get-all-body-sections';
import { GetBodySectionById } from '@/modules/body-section/application/use-cases/get-body-section-by-id';
import { BodySectionPrismaReporisoty } from '@/modules/body-section/infrastructure/prisma/body-section.prisma.repository';
import { globalErrorMapper } from '@/shared/infrastructure/error.mapper.container';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const makeBodySectionModule = () => {
	const bodySectionRepo = new BodySectionPrismaReporisoty(prisma, globalErrorMapper);
	return {
		GetAllBodySectionUseCase: new GetAllBodySections(bodySectionRepo),
		GetBodySectionByIdUseCase: new GetBodySectionById(bodySectionRepo),
	};
};
