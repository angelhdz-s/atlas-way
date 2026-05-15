'use server';

import type { ActionResponseProps } from '@/shared/presentation/action.response';
import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';
import { getSession } from 'next-auth/react';
import { getContainer } from '@/di/containers';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import { MuscleMapper } from '@/modules/muscle/infrastructure/muscle.mapper';

export async function getAllMuscles(): Promise<ActionResponseProps<MuscleDTO[]>> {
  const session = await getSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const getAllMuscles = container.muscle.GetAllMusclesUseCase;
  const musclesResult = await getAllMuscles.execute();
  if (!musclesResult.success) return ActionFailure(musclesResult.error.message);
  const musclesDTO = musclesResult.data.map((muscle) => {
    return MuscleMapper.toDTO(muscle);
  });
  return ActionSuccess(musclesDTO, 'Muscles were obtained successfully');
}

export async function getMuscleById(
  id: MuscleProps['id']
): Promise<ActionResponseProps<MuscleDTO | null>> {
  const session = await getSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const getMuscleById = container.muscle.GetMuscleByIdUseCase;
  const muscleResult = await getMuscleById.execute(id);
  if (!muscleResult.success) return ActionFailure(muscleResult.error.message);
  if (!muscleResult.data) return ActionSuccess(muscleResult.data, 'No muscle was found');
  const muscleDTO = MuscleMapper.toDTO(muscleResult.data);

  return ActionSuccess(muscleDTO, 'Muscle obtained successfully');
}

export async function getMusclesByIds(
  ids: MuscleProps['id'][]
): Promise<ActionResponseProps<null>> {
  const session = await getSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const getMusclesByIds = container.muscle.GetMusclesByIdsUseCase;
  const musclesResult = await getMusclesByIds.execute(ids);
  if (!musclesResult.success) return ActionFailure('Error fetching muscles by ids');

  return ActionSuccess(null, 'Muscles gotten');
}
