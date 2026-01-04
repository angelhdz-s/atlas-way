'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { getContainer } from '@/di/containers';
import { MuscleMapper } from '../infrastructure/muscle.mapper';
import { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';
import { MuscleProps } from '../domain/muscle.types';

export async function getAllMuscles(): ActionResponse<MuscleDTO[]> {
	const container = getContainer();
	const usecase = container.muscle.GetAllMusclesUseCase;
	const muscles = await usecase.execute();
	if (!muscles.success) return ActionFailure(muscles.error.message);
	const musclesDto = muscles.data.map((muscle) => MuscleMapper.toDTO(muscle));
	return ActionSuccess(musclesDto, 'Muscles were obtained successfully');
}

export async function getMuscleById(id: MuscleProps['id']): ActionResponse<MuscleDTO | null> {
	const container = getContainer();
	const getMuscle = container.muscle.GetMuscleByIdUseCase;
	const result = await getMuscle.execute(id);

	if (!result.success) return ActionFailure(result.error.message);

	const muscleDTO = result.data ? MuscleMapper.toDTO(result.data) : null;

	return ActionSuccess(result.data, '');
}

export async function getAllMusclesByExercise(
	exerciseId: ExerciseToMuscle['exerciseId']
): ActionResponse<MuscleDTO[]> {
	const muscles: MuscleDTO[] = [];
	const container = getContainer();
	const getExercisesMuscles = container.exerciseToMuscle.GetExercisesToMusclesByExerciseIdUseCase;
	const request = await getExercisesMuscles.execute(exerciseId);
	if (!request.success) return ActionFailure(request.error.message);

	for (const { muscleId } of request.data) {
		const muscleRequest = await getMuscleById(muscleId);
		if (!muscleRequest.success) return ActionFailure(muscleRequest.message);
		if (!muscleRequest.data) return ActionFailure(`Muscle with id ${muscleId} was not found`);
		muscles.push(muscleRequest.data);
	}

	return ActionSuccess(muscles, 'Muscles gotten');
}
