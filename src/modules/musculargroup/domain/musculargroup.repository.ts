import { MuscularGroup } from './musculargroup.entity';

export interface IMuscularGroupRepository {
	findAll: () => Promise<MuscularGroup[]>;
	findById: (id: number) => Promise<MuscularGroup | null>;
}
