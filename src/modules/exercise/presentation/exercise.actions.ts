import { getCurrentSession } from '@/modules/auth/infrastructure/next-auth/next-auth.currentsession';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import {
	ExerciseFormProps,
	exerciseFormSchema,
} from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
import { getUserIdByEmail } from '../../user/presentation/user.actions';
export async function createExerciseAction(
	data: ExerciseFormProps
): ActionResponse<Exercise | null> {
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

	const { initialStats, exercise } = result.data;

	const { data: userId } = await getUserIdByEmail(session.user.email);

	// TODO
	// Create exercise and return it

	return { success: true, message: 'Exercise created successfully', data: null };
}
