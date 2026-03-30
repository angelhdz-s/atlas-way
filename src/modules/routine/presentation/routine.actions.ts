'use server';

import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import { getContainer } from '@/di/containers';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { routineFormSchema } from './ui/config/routine.schema';
import { RoutineMapper } from '../infrastructure/routine.mapper';
import type { ActionResponse } from '@/shared/presentation/action.response';
import type { CreateRoutineInput } from '../application/dtos/create-routine.dto';
import type { RoutineDTO } from '../application/dtos/routine.dto';
import type { RoutineForm } from './ui/config/routine.schema';
import type { RoutineCycleId } from '../domain/constants/routine.constants.cycle-types';
import type { RoutineProps } from '../domain/routine.types';

export async function createRoutineAction(data: RoutineForm): ActionResponse<RoutineDTO> {
  const parsedRoutine = routineFormSchema.safeParse(data);
  if (!parsedRoutine.success) {
    const errors = parsedRoutine.error.issues.map((issue) => issue.message).join(', ');
    return ActionFailure(`Invalid routine data: ${errors}`);
  }

  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return ActionFailure('User not found');

  const userId = userIdResult.data;

  const container = getContainer();
  const createRoutine = container.routine.CreateRoutineUseCase;

  const routineData = parsedRoutine.data;

  const newRoutineInput: CreateRoutineInput = {
    active: routineData.active,
    days: routineData.days ?? 0,
    description: routineData.description ?? null,
    initialDate: routineData.initialDate,
    name: routineData.name,
    userId,
    cycleId: routineData.cycleType as RoutineCycleId,
    routineDays: routineData.sessions.map((s) => ({
      day: s.day,
      name: s.dayName,
      sessionId: s.sessionId,
    })),
  };

  const createRoutineResult = await createRoutine.execute(newRoutineInput);

  if (!createRoutineResult.success) return ActionFailure(createRoutineResult.error.message);

  const routineDTO = RoutineMapper.toDTO(createRoutineResult.data);

  return ActionSuccess(routineDTO, 'Routine created successfully');
}

export async function getAllRoutines(): ActionResponse<RoutineDTO[]> {
  const container = getContainer();
  const createRoutine = container.routine.GetAllRoutinesUseCase;

  const routinesResult = await createRoutine.execute();

  if (!routinesResult.success) return ActionFailure(routinesResult.error.message);

  const routineDTOs = routinesResult.data.map((r) => RoutineMapper.toDTO(r));

  return ActionSuccess(routineDTOs, 'Routine created successfully');
}

export async function deleteRoutine(routineId: RoutineProps['id']): ActionResponse<RoutineDTO> {
  const container = getContainer();

  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return ActionFailure(userIdResult.message);
  const userId = userIdResult.data;

  const deleteRoutine = container.routine.DeleteRoutineUseCase;
  const deleteRoutineResult = await deleteRoutine.execute(routineId, userId);
  if (!deleteRoutineResult.success) return ActionFailure(deleteRoutineResult.error.message);

  const domainRoutine = deleteRoutineResult.data;

  const routineDTO = RoutineMapper.toDTO(domainRoutine);

  return ActionSuccess(routineDTO, 'Routine created successfully');
}
