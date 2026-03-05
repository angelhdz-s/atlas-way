import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { BodySection } from './body-section.entity';
import type { BodySectionProps } from './body-section.types';

export interface IBodySectionRepository {
  findAll: () => RepositoryResult<BodySection[]>;
  findById: (
    id: BodySectionProps['id']
  ) => RepositoryResult<BodySection | null>;
}
