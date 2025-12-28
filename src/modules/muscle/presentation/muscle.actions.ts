import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { Muscle } from '../domain/muscle.entity';
import { Containers } from '@/di/containers';

export async function getMuscles(): ActionResponse<Muscle[]> {
	const usecase = Containers.Muscle.GetAllMusclesUseCase;
	const muscles = await usecase.execute();
	if (!muscles.success) return ActionFailure(muscles.error.message);
	return ActionSuccess(muscles.data, 'Muscles were obtained successfully');
}
