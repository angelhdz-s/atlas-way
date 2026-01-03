import { GetAllBodySections } from '@/modules/bodysection/application/usecases/get-all-bodysections';
import { GetBodySectionById } from '@/modules/bodysection/application/usecases/get-bodysection-by-id';
import { BodySectionPrismaReporisoty } from '@/modules/bodysection/infrastructure/prisma/bodysection.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const bodySectionRepo = new BodySectionPrismaReporisoty(prisma);

const GetAllBodySectionUseCase = new GetAllBodySections(bodySectionRepo);
const GetBodySectionByIdUseCase = new GetBodySectionById(bodySectionRepo);

export const BodySectionContainer = {
	GetAllBodySectionUseCase,
	GetBodySectionByIdUseCase,
};

export const makeBodySectionModule = () => {
	const bodySectionRepo = new BodySectionPrismaReporisoty(prisma);
	return {
		GetAllBodySectionUseCase: new GetAllBodySections(bodySectionRepo),
		GetBodySectionByIdUseCase: new GetBodySectionById(bodySectionRepo),
	};
};
