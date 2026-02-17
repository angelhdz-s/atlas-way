import { GetAllBodySections } from '@/modules/body-section/application/use-cases/get-all-body-sections';
import { GetBodySectionById } from '@/modules/body-section/application/use-cases/get-body-section-by-id';
import { IBodySectionRepository } from './domain/body-section.repository';

type Props = {
	bodySectionRepository: IBodySectionRepository;
};

export const makeBodySectionModule = ({ bodySectionRepository }: Props) => {
	return {
		GetAllBodySectionUseCase: new GetAllBodySections(bodySectionRepository),
		GetBodySectionByIdUseCase: new GetBodySectionById(bodySectionRepository),
	};
};
