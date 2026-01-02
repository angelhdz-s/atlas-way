import { Containers } from '@/di/containers';
import { MuscularGroup } from '@/modules/musculargroup/domain/musculargroup.entity';
import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';

export async function getMuscularGroups(): ActionResponse<MuscularGroup[]> {
	const usecase = Containers.MuscularGroup.GetAllMuscularGroupsUseCase;
	const musculargroups = await usecase.execute();

	if (!musculargroups.success) return ActionFailure(musculargroups.error.message);

	return ActionSuccess(musculargroups.data, 'Muscular groups were obtained successfully');
}
