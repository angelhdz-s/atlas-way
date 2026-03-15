'use server';

import {
  type ExerciseFormProps,
  ExerciseFormSchema,
} from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import {
  ActionFailure,
  type ActionResponse,
  ActionSuccess,
} from '@/shared/presentation/action.response';
import type { CreateExerciseInput } from '../application/dtos/create-exercise.dto';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { getContainer } from '@/di/containers';
import { ExerciseMapper } from '../infrastructure/exercise.mapper';
import type { ExerciseDTO } from '../application/dtos/exercise.dto';
import { revalidatePath } from 'next/cache';
import type { FullExerciseDTO } from './exercise.presentation.types';
import { getAllMuscles } from '@/modules/muscle/presentation/muscle.actions';

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

  const exerciseInput: CreateExerciseInput = {
    name: parsedExercise.exercise.name,
    description: parsedExercise.exercise.description ?? null,
    reps: parsedExercise.exercise.reps,
    sets: parsedExercise.exercise.sets,
    weight: parsedExercise.exercise.weight,
    userId,
    muscleIds: parsedExercise.muscles.map((m) => Number(m.id)),
  };

  const container = getContainer();
  const createExercise = container.exercise.CreateExerciseUseCase;

  const createdExercise = await createExercise.execute(exerciseInput);

  if (!createdExercise.success) return ActionFailure(createdExercise.error.message);

  const exerciseDTO = ExerciseMapper.toDTO(createdExercise.data);
  revalidatePath('/dashboard/exercises');
  return ActionSuccess(exerciseDTO, 'Exercise created successfully');
}

export async function getAllUserExercises(): ActionResponse<FullExerciseDTO[]> {
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
    const musclesResult = await getAllMuscles();
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
