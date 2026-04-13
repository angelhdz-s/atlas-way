'use server';

import { getContainer } from '@/di/containers';
import { sessionFormSchema } from '@/modules/session/presentation/ui/config/session.schema';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { SessionMapper } from '@/modules/session/infrastructure/session.mapper';
import {
  ActionFailure,
  type ActionResponse,
  ActionSuccess,
} from '@/shared/presentation/action.response';
import type { SessionForm } from '@/modules/session/presentation/ui/config/session.schema';
import type { CreateSessionInput } from '@/modules/session/application/dtos/create-session.dto';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { SessionProps } from '@/modules/session/domain/session.types';

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

export async function getSessionsByIds(ids: SessionProps['id'][]): ActionResponse<SessionDTO[]> {
  const container = getContainer();

  const getAllSessions = container.session.GetSessionsByIdsUseCase;

  const sessionsResult = await getAllSessions.execute(ids);

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

export async function deleteSession(sessionId: SessionProps['id']): ActionResponse<SessionDTO> {
  const container = getContainer();

  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return ActionFailure(userIdResult.message);
  if (!userIdResult.data) return ActionFailure('User not found');
  const userId = userIdResult.data;

  const deleteSession = container.session.DeleteSessionUseCase;
  const deleteSessionResult = await deleteSession.execute(sessionId, userId);
  if (!deleteSessionResult.success) return ActionFailure(deleteSessionResult.error.message);

  const sessionDTO = SessionMapper.toDTO(deleteSessionResult.data);

  return ActionSuccess(sessionDTO, 'Session deleted successfully');
}
