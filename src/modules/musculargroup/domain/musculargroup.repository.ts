import { MuscularGroup } from './musculargroup.entity';
import { MuscularGroupProps } from './musculargroup.schema';

export interface IMuscularGroupRepository {
	findAll: () => Promise<MuscularGroup[]>;
	findById: (id: number) => Promise<MuscularGroup | null>;
	findAllByBodySectionId: (id: MuscularGroupProps['bodySectionId']) => Promise<MuscularGroup[]>;
}
