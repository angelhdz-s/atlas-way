import { RepositoryResult } from '@/shared/domain/repository.result';
import { MuscularGroup } from './muscular-group.entity';
import { MuscularGroupProps } from './muscular-group.types';

export interface IMuscularGroupRepository {
	findAll: () => RepositoryResult<MuscularGroup[]>;
	findById: (id: MuscularGroupProps['id']) => RepositoryResult<MuscularGroup | null>;
}
