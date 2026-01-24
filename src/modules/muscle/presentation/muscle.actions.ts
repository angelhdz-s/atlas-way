'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { getContainer } from '@/di/containers';
import { MuscleMapper } from '../infrastructure/muscle.mapper';
import { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';
import { MuscleProps } from '../domain/muscle.types';

export async function getAllMuscles(): ActionResponse<MuscleDTO[]> {
	const container = getContainer();
	const getAllMuscles = container.muscle.GetAllMusclesUseCase;
	const musclesResult = await getAllMuscles.execute();
	if (!musclesResult.success) return ActionFailure(musclesResult.error.message);
	const musclesDTO = musclesResult.data.map((muscle) => MuscleMapper.toDTO(muscle));
	return ActionSuccess(musclesDTO, 'Muscles were obtained successfully');
}

export async function getMuscleById(id: MuscleProps['id']): ActionResponse<MuscleDTO | null> {
	const container = getContainer();
	const getMuscleById = container.muscle.GetMuscleByIdUseCase;
	const muscleResult = await getMuscleById.execute(id);

	if (!muscleResult.success) return ActionFailure(muscleResult.error.message);

	const muscleDTO = muscleResult.data ? MuscleMapper.toDTO(muscleResult.data) : null;

	return ActionSuccess(muscleResult.data, '');
}

export async function getAllMusclesByExercise(
	exerciseId: ExerciseToMuscle['exerciseId']
): ActionResponse<MuscleDTO[]> {
	const muscles: MuscleDTO[] = [];
	const container = getContainer();
	const getExercisesToMusclesByExerciseId =
		container.exerciseToMuscle.GetExercisesToMusclesByExerciseIdUseCase;
	const exerciseToMusclesResult = await getExercisesToMusclesByExerciseId.execute(exerciseId);
	if (!exerciseToMusclesResult.success)
		return ActionFailure(exerciseToMusclesResult.error.message);

	const exerciseToMuscles = exerciseToMusclesResult.data;

	for (const { muscleId } of exerciseToMuscles) {
		const muscleRequest = await getMuscleById(muscleId);
		if (!muscleRequest.success) return ActionFailure(muscleRequest.message);
		if (!muscleRequest.data) return ActionFailure(`Muscle with id ${muscleId} was not found`);
		muscles.push(muscleRequest.data);
	}

	return ActionSuccess(muscles, 'Muscles gotten');
}
