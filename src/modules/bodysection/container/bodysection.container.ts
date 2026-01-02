import { GetAllBodySections } from '../application/usecases/get-all-bodysections';
import { GetBodySectionById } from '../application/usecases/get-bodysection-by-id';
import { BodySectionPrismaReporisoty } from '../infrastructure/prisma/bodysection.prisma.repository';

export const bodySectionRepo = new BodySectionPrismaReporisoty();

const GetAllBodySectionUseCase = new GetAllBodySections(bodySectionRepo);
const GetBodySectionByIdUseCase = new GetBodySectionById(bodySectionRepo);

export const BodySectionContainer = {
	GetAllBodySectionUseCase,
	GetBodySectionByIdUseCase,
};
