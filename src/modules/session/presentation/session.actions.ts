import { ActionResponse } from '@/shared/contracts/actions.response';
import { Session } from '../domain/session.entity';

export async function createSessionAction(): ActionResponse<Session | null> {
	return {
		data: null,
		message: 'Not created session',
		success: false,
	};
}
