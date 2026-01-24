import { getContainer } from '@/di/containers';
import { MuscularGroup } from '@/modules/muscular-group/domain/muscular-group.entity';
import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';

export async function getMuscularGroups(): ActionResponse<MuscularGroup[]> {
	const container = getContainer();
	const getAllMuscularGroups = container.muscularGroup.GetAllMuscularGroupsUseCase;
	const muscularGroupsResult = await getAllMuscularGroups.execute();

	if (!muscularGroupsResult.success) return ActionFailure(muscularGroupsResult.error.message);

	return ActionSuccess(muscularGroupsResult.data, 'Muscular groups were obtained successfully');
}
