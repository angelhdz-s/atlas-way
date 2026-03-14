'use server';

import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import { getContainer } from '@/di/containers';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { routineFormSchema } from './ui/config/routine.schema';
import { RoutineMapper } from '../infrastructure/routine.mapper';
import type { ActionResponse } from '@/shared/presentation/action.response';
import type { CreateRoutineDaysWithoutRoutineIdInput } from '@/modules/routine-days/application/dtos/create-routine-days.dto';
import type { CreateRoutineInput } from '../application/dtos/create-routine.dto';
import type { RoutineDTO } from '../application/dtos/routine.dto';
import type { RoutineForm } from './ui/config/routine.schema';

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
    routineCycleId: routineData.cycleType,
    userId,
  };

  const routineDays: CreateRoutineDaysWithoutRoutineIdInput[] = routineData.sessions.map(
    (routineDay) => ({
      dayNumber: routineDay.day,
      name: routineDay.dayName,
      sessionId: routineDay.sessionId,
    })
  );

  const createRoutineResult = await createRoutine.execute(newRoutineInput, routineDays);

  if (!createRoutineResult.success) return ActionFailure(createRoutineResult.error.message);

  const routineDTO = RoutineMapper.toDTO(createRoutineResult.data);

  return ActionSuccess(routineDTO, 'Routine created successfully');
}
