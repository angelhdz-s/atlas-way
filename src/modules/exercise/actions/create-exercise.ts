'use server';

import { getUserId } from '@/modules/user/actions/users';
import {
	ExerciseForm,
	exerciseFormSchema,
	ExerciseInitialStatsType,
	ExerciseType,
} from '../config/exercise-schema';
import { Exercise } from '../domain/exercise.entity';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
import { getCurrentSession } from '@/modules/auth/infrastructure/nextAuth/auth.currentsession';
import { getUserIdByEmail } from '@/app/_actions/user.actions';

export async function createExerciseAction(data: ExerciseForm): ActionResponse<Exercise | null> {
	const response: ActionResponseProps<Exercise | null> = {
		success: false,
		message: '',
		data: null,
	};

	const result = exerciseFormSchema.safeParse(data);
	if (!result.success) {
		response.message = result.error.issues.join(', ');
		return response;
	}

	const session = await getCurrentSession();
	if (!session?.user || !session.user.email) {
		response.message = 'User session not found';
		return response;
	}

	const { data: userId } = await getUserIdByEmail(session.user.email);

	return { success: true, message: 'Exercise created successfully' };
}
