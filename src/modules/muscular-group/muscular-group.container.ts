import { GetAllMuscularGroups } from '@/modules/muscular-group/application/use-cases/get-all-muscular-groups';
import { GetMuscularGroupById } from '@/modules/muscular-group/application/use-cases/get-muscular-group-by-id';
import { IMuscularGroupRepository } from './domain/muscular-group.repository';

type Props = {
	muscularGroupRepository: IMuscularGroupRepository;
};

export const makeMuscularGroupModule = ({ muscularGroupRepository }: Props) => {
	return {
		GetAllMuscularGroupsUseCase: new GetAllMuscularGroups(muscularGroupRepository),
		GetMuscularGroupByIdUseCase: new GetMuscularGroupById(muscularGroupRepository),
	};
};
