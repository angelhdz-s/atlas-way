import { getContainer } from '@/di/containers';
import { ActionResponse } from '@/shared/contracts/actions.response';
import { AuthSession } from '../domain/errors/auth-session.types';

export async function getSession(): ActionResponse<AuthSession | null> {
	const container = getContainer();
	const getCurrentSession = container.auth.GetCurrentSessionUseCase;
	const sessionResult = await getCurrentSession.execute();
	if (!sessionResult.success)
		return {
			success: false,
			message: sessionResult.error.message,
			data: null,
		};
	return {
		success: true,
		message: 'Session obtained successfully',
		data: sessionResult.data,
	};
}
