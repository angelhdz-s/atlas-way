import { RepositoryResult } from '@/shared/domain/repository.result';
import { BodySection } from './body-section.entity';
import { BodySectionProps } from './body-section.types';

export interface IBodySectionRepository {
	findAll: () => RepositoryResult<BodySection[]>;
	findById: (id: BodySectionProps['id']) => RepositoryResult<BodySection | null>;
}
