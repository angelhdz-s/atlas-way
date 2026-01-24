'use server';

import {
	ExerciseFormProps,
	ExerciseFormSchema,
} from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { CreateExerciseInput } from '../application/dtos/create-exercise.dto';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { CreateExerciseInitialStatsWithoutExerciseIdInput } from '@/modules/exercise-initial-stats/application/dtos/create-exercise-initial-stats.dto';
import { getContainer } from '@/di/containers';
import { ExerciseMapper } from '../infrastructure/exercise.mapper';
import { ExerciseDTO } from '../application/dtos/exercise.dto';
import { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import { getAllMusclesByExercise } from '@/modules/muscle/presentation/muscle.actions';
import { revalidatePath } from 'next/cache';

export type FullExerciseDTO = ExerciseDTO & { muscles: MuscleDTO[] };

export async function createExerciseAction(
	data: ExerciseFormProps
): ActionResponse<ExerciseDTO | null> {
	const result = ExerciseFormSchema.safeParse(data);

	if (!result.success) {
		return ActionFailure(result.error.message);
	}

	const userId = await getCurrentUserId();
	if (!userId.success || !userId.data) return ActionFailure(userId.message);

	const container = getContainer();
	const exerciseUseCase = container.exercise.CreateExerciseUseCase;

	const exercise: CreateExerciseInput = {
		name: result.data.exercise.name,
		description: result.data.exercise.description ?? null,
		userId: userId.data,
	};

	const muscles = result.data.muscles.map(({ id }) => Number(id));

	if (!result.data.initialStats) {
		const created = await exerciseUseCase.execute(exercise, muscles);
		if (!created.success) return ActionFailure(created.error.message);
		return ActionSuccess(created.data, 'Exercise created successfully');
	}

	const stats: CreateExerciseInitialStatsWithoutExerciseIdInput = {
		sets: result.data.initialStats.sets,
		reps: result.data.initialStats.reps,
		weight: result.data.initialStats.weight,
	};

	const created = await exerciseUseCase.execute(exercise, muscles, stats);

	if (!created.success) return ActionFailure(created.error.message);

	const exerciseDTO = ExerciseMapper.toDTO(created.data);
	revalidatePath('/dashboard/exercises');
	return ActionSuccess(exerciseDTO, 'Exercise created successfully');
}

type UserExercisesConfig = {
	includeMuscles: boolean;
} | null;

export async function getAllUserExercises(
	config: UserExercisesConfig = null
): ActionResponse<FullExerciseDTO[] | ExerciseDTO[]> {
	const container = getContainer();

	const userIdRequest = await getCurrentUserId();
	if (!userIdRequest.success) return ActionFailure(userIdRequest.message);
	if (!userIdRequest.data) return ActionFailure('User not found');
	const userId = userIdRequest.data;

	const getExercises = container.exercise.GetAllUserExercisesUseCase;
	const exerciseRequest = await getExercises.execute(userId);
	if (!exerciseRequest.success) return ActionFailure(exerciseRequest.error.message);
	const exercises = exerciseRequest.data;

	if (config && !config.includeMuscles)
		return ActionSuccess(exercises, 'User exercises found successfully');

	const fullExercises: FullExerciseDTO[] = [];

	for (const exercise of exercises) {
		const musclesRequest = await getAllMusclesByExercise(exercise.id);
		if (!musclesRequest.success) return ActionFailure(musclesRequest.message);
		const muscles = musclesRequest.data;
		const exerciseDTO = ExerciseMapper.toDTO(exercise);

		const fullExercise: FullExerciseDTO = {
			...exerciseDTO,
			muscles,
		};

		fullExercises.push(fullExercise);
	}

	return ActionSuccess(fullExercises, 'User exercises found successfully');
}
