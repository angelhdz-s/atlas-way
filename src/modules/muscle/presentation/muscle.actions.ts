'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { getContainer } from '@/di/containers';
import { MuscleMapper } from '../infrastructure/muscle.mapper';
import { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';

export async function getAllMuscles(): ActionResponse<MuscleDTO[]> {
	const container = getContainer();
	const usecase = container.muscle.GetAllMusclesUseCase;
	const muscles = await usecase.execute();
	if (!muscles.success) return ActionFailure(muscles.error.message);
	const musclesDto = muscles.data.map((muscle) => MuscleMapper.toDTO(muscle));
	return ActionSuccess(musclesDto, 'Muscles were obtained successfully');
}
