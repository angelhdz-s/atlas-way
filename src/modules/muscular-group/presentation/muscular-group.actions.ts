import { getContainer } from '@/di/containers';
import { MuscularGroup } from '@/modules/muscular-group/domain/muscular-group.entity';
import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';

export async function getMuscularGroups(): ActionResponse<MuscularGroup[]> {
	const container = getContainer();
	const usecase = container.muscularGroup.GetAllMuscularGroupsUseCase;
	const musculargroups = await usecase.execute();

	if (!musculargroups.success) return ActionFailure(musculargroups.error.message);

	return ActionSuccess(musculargroups.data, 'Muscular groups were obtained successfully');
}
