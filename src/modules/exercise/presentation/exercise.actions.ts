'use server';

import {
	ExerciseFormProps,
	ExerciseFormSchema,
} from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import {
	ActionFailure,
	ActionResponse,
	ActionSuccess,
} from '@/shared/presentation/action.response';
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
	const exerciseParseResult = ExerciseFormSchema.safeParse(data);

	if (!exerciseParseResult.success) {
		return ActionFailure(exerciseParseResult.error.message);
	}
	const parsedExercise = exerciseParseResult.data;

	const userIdResult = await getCurrentUserId();
	if (!userIdResult.success || !userIdResult.data) return ActionFailure(userIdResult.message);
	const userId = userIdResult.data;

	const container = getContainer();
	const createExercise = container.exercise.CreateExerciseUseCase;

	const exercise: CreateExerciseInput = {
		name: parsedExercise.exercise.name,
		description: parsedExercise.exercise.description ?? null,
		userId,
	};

	const muscles = parsedExercise.muscles.map(({ id }) => Number(id));

	if (!parsedExercise.initialStats) {
		const createdExercise = await createExercise.execute(exercise, muscles);
		if (!createdExercise.success) return ActionFailure(createdExercise.error.message);
		return ActionSuccess(createdExercise.data, 'Exercise created successfully');
	}

	const stats: CreateExerciseInitialStatsWithoutExerciseIdInput = {
		sets: parsedExercise.initialStats.sets,
		reps: parsedExercise.initialStats.reps,
		weight: parsedExercise.initialStats.weight,
	};

	const createdExercise = await createExercise.execute(exercise, muscles, stats);

	if (!createdExercise.success) return ActionFailure(createdExercise.error.message);

	const exerciseDTO = ExerciseMapper.toDTO(createdExercise.data);
	revalidatePath('/dashboard/exercises');
	return ActionSuccess(exerciseDTO, 'Exercise created successfully');
}

type UserExercisesConfig = {
	includeMuscles: boolean;
} | null;

export async function getAllUserExercises(
	config: UserExercisesConfig = null
): ActionResponse<FullExerciseDTO[]> {
	const container = getContainer();

	const userIdResult = await getCurrentUserId();
	if (!userIdResult.success) return ActionFailure(userIdResult.message);
	if (!userIdResult.data) return ActionFailure('User not found');
	const userId = userIdResult.data;

	const getAllExercises = container.exercise.GetAllUserExercisesUseCase;
	const exercisesResult = await getAllExercises.execute(userId);
	if (!exercisesResult.success) return ActionFailure(exercisesResult.error.message);
	const exercises = exercisesResult.data;

	const fullExercises: FullExerciseDTO[] = [];

	for (const exercise of exercises) {
		const musclesResult = await getAllMusclesByExercise(exercise.id);
		if (!musclesResult.success) return ActionFailure(musclesResult.message);
		const muscles = musclesResult.data;
		const exerciseDTO = ExerciseMapper.toDTO(exercise);

		const fullExercise: FullExerciseDTO = {
			...exerciseDTO,
			muscles,
		};

		fullExercises.push(fullExercise);
	}

	return ActionSuccess(fullExercises, 'User exercises found successfully');
}
