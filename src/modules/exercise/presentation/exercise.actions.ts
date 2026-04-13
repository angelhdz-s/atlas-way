'use server';

import { revalidatePath } from 'next/cache';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import { ExerciseFormSchema } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { ExerciseMapper } from '@/modules/exercise/infrastructure/exercise.mapper';
import { getContainer } from '@/di/containers';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import type { ActionResponse } from '@/shared/presentation/action.response';
import type { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { ExerciseFormProps } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';

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

export async function getAllUserExercises(): ActionResponse<ExerciseDTO[]> {
  const container = getContainer();

  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return ActionFailure(userIdResult.message);
  if (!userIdResult.data) return ActionFailure('User not found');
  const userId = userIdResult.data;

  const getAllExercises = container.exercise.GetAllUserExercisesUseCase;
  const exercisesResult = await getAllExercises.execute(userId);
  if (!exercisesResult.success) return ActionFailure(exercisesResult.error.message);
  const exercises = exercisesResult.data;

  const exercisesDTOs = exercises.map((m) => ExerciseMapper.toDTO(m));

  return ActionSuccess(exercisesDTOs, 'User exercises found successfully');
}

export async function deleteExercise(exerciseId: ExerciseProps['id']): ActionResponse<ExerciseDTO> {
  const container = getContainer();

  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return ActionFailure(userIdResult.message);
  if (!userIdResult.data) return ActionFailure('User not found');
  const userId = userIdResult.data;

  const deleteExercise = container.exercise.DeleteExerciseUseCase;
  const exercisesResult = await deleteExercise.execute(exerciseId, userId);
  if (!exercisesResult.success) return ActionFailure(exercisesResult.error.message);
  const exercise = exercisesResult.data;

  const exerciseDTO = ExerciseMapper.toDTO(exercise);

  return ActionSuccess(exerciseDTO, 'Exercise deleted successfully');
}
