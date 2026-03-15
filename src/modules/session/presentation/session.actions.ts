'use server';

import {
  ActionFailure,
  type ActionResponse,
  ActionSuccess,
} from '@/shared/presentation/action.response';
import type { SessionForm } from './ui/config/session.schema';
import { sessionFormSchema } from './ui/config/session.schema';
import type { CreateSessionInput } from '../application/dtos/create-session.dto';
import { getContainer } from '@/di/containers';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import type { SessionDTO } from '../application/dtos/session.dto';
import { SessionMapper } from '../infrastructure/session.mapper';

export async function createSessionAction(data: SessionForm): ActionResponse<SessionDTO> {
  const parseResult = sessionFormSchema.safeParse(data);
  if (!parseResult.success) return ActionFailure(parseResult.error.errors.join(', '));
  const sessionParsedData = parseResult.data;

  const userIdResult = await getCurrentUserId();

  if (!userIdResult.success) return ActionFailure(userIdResult.message);
  if (!userIdResult.data) return ActionFailure('User not found');

  const userId = userIdResult.data;

  const sessionInput: CreateSessionInput = {
    name: sessionParsedData.name,
    description: sessionParsedData.description,
    userId,
    exerciseIds: sessionParsedData.exercises.map((e) => e.id),
  };

  const container = getContainer();
  const createSession = container.session.CreateSessionUseCase;
  const sessionResult = await createSession.execute(sessionInput);
  if (!sessionResult.success) return ActionFailure(sessionResult.error.message);
  const sessionDTO = SessionMapper.toDTO(sessionResult.data);
  return ActionSuccess(sessionDTO, 'Session created successfully');
}

export async function getAllSessions(): ActionResponse<SessionDTO[]> {
  const container = getContainer();

  const getAllSessions = container.session.GetAllSessionsUseCase;

  const sessionsResult = await getAllSessions.execute();

  if (!sessionsResult.success)
    return {
      message: 'Error fetching sessions',
      success: false,
      data: null,
    };

  const { data } = sessionsResult;

  const sessionsDTO = data.map((session) => SessionMapper.toDTO(session));

  return {
    message: 'Sessions obtained successfully',
    success: true,
    data: sessionsDTO,
  };
}
