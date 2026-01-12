'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { SessionsFormData } from './types';
import { sessionFormSchema } from './ui/config/session-schema';
import { CreateSessionInput } from '../application/dtos/create-session.dto';
import { getContainer } from '@/di/containers';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';
import { SessionDTO } from '../application/dtos/session.dto';
import { SessionMapper } from '../infrastructure/session.mapper';
import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export async function createSessionAction(data: SessionsFormData): ActionResponse<SessionDTO> {
	const parseResult = sessionFormSchema.safeParse(data);
	if (!parseResult.success) return ActionFailure(parseResult.error.errors.join(', '));
	const sessionFormData = parseResult.data;

	const userIdResult = await getCurrentUserId();

	if (!userIdResult.success) return ActionFailure(userIdResult.message);
	if (!userIdResult.data) return ActionFailure('User not found');

	const userId = userIdResult.data;

	const sessionInput: CreateSessionInput = {
		name: sessionFormData.name,
		description: sessionFormData.description,
		userId,
	};

	const exerciseIds: ExerciseProps['id'][] | null =
		sessionFormData.exercises && sessionFormData.exercises.length > 0
			? sessionFormData.exercises.map((exercise) => exercise.id)
			: null;

	return await createSession(sessionInput, exerciseIds);
}

export async function createSession(
	sessionData: CreateSessionInput,
	exerciseIds: ExerciseProps['id'][] | null
): ActionResponse<SessionDTO> {
	const container = getContainer();
	const createSession = container.session.CreateSessionUseCase;
	const createResult = await createSession.execute(sessionData, exerciseIds);
	if (!createResult.success) return ActionFailure(createResult.error.message);
	const sessionDTO = SessionMapper.toDTO(createResult.data);
	console.log(exerciseIds);
	return ActionSuccess(sessionDTO, 'Session created successfully');
}
