import { RepositoryResult } from '@/shared/domain/repository.result';
import { MuscularGroup } from './musculargroup.entity';
import { MuscularGroupProps } from './musculargroup.types';

export interface IMuscularGroupRepository {
	findAll: () => RepositoryResult<MuscularGroup[]>;
	findById: (id: MuscularGroupProps['id']) => RepositoryResult<MuscularGroup | null>;
}
