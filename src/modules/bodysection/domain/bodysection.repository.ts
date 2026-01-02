import { RepositoryResult } from '@/shared/domain/repository.result';
import { BodySection } from './bodysection.entity';
import { BodySectionProps } from './bodysection.types';

export interface IBodySectionRepository {
	findAll: () => RepositoryResult<BodySection[]>;
	findById: (id: BodySectionProps['id']) => RepositoryResult<BodySection | null>;
}
