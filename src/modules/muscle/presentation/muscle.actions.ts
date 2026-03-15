'use server';

import {
  ActionFailure,
  type ActionResponse,
  ActionSuccess,
} from '@/shared/presentation/action.response';
import { getContainer } from '@/di/containers';
import { MuscleMapper } from '../infrastructure/muscle.mapper';
import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import type { MuscleProps } from '../domain/muscle.types';

export async function getAllMuscles(): ActionResponse<MuscleDTO[]> {
  const container = getContainer();
  const getAllMuscles = container.muscle.GetAllMusclesUseCase;
  const musclesResult = await getAllMuscles.execute();
  if (!musclesResult.success) return ActionFailure(musclesResult.error.message);
  const musclesDTO = musclesResult.data.map((muscle, index) => {
    console.log(index, muscle);
    return MuscleMapper.toDTO(muscle);
  });
  return ActionSuccess(musclesDTO, 'Muscles were obtained successfully');
}

export async function getMuscleById(id: MuscleProps['id']): ActionResponse<MuscleDTO | null> {
  const container = getContainer();
  const getMuscleById = container.muscle.GetMuscleByIdUseCase;
  const muscleResult = await getMuscleById.execute(id);

  if (!muscleResult.success) return ActionFailure(muscleResult.error.message);

  if (!muscleResult.data) return ActionSuccess(muscleResult.data, 'No muscle was found');

  const muscleDTO = MuscleMapper.toDTO(muscleResult.data);

  return ActionSuccess(muscleDTO, 'Muscle obtained successfully');
}

export async function getMusclesByIds(ids: MuscleProps['id'][]): ActionResponse<null> {
  const container = getContainer();

  const getMusclesByIds = container.muscle.GetMusclesByIdsUseCase;

  const musclesResult = await getMusclesByIds.execute(ids);

  if (!musclesResult.success) return ActionFailure('Error fetching muscles by ids');

  console.log(musclesResult.data);

  return ActionSuccess(null, 'Muscles gotten');
}
