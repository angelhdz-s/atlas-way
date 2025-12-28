import { Containers } from '@/di/containers';
import { ActionResponse } from '@/shared/contracts/actions.response';
import { AuthSession } from '../domain/errors/auth-session.types';

export async function getSession(): ActionResponse<AuthSession | null> {
	const usecase = Containers.Auth.GetCurrentSessionUseCase;
	const session = await usecase.execute();
	if (!session.success)
		return {
			success: false,
			message: session.error.message,
			data: null,
		};
	return {
		success: true,
		message: 'Session obtained successfully',
		data: session.data,
	};
}
