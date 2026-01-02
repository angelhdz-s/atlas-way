import { getCurrentSession } from '@/modules/auth/infrastructure/next-auth/next-auth.currentsession';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import {
	ExerciseFormProps,
	exerciseFormSchema,
} from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
export async function createExerciseAction(
	data: ExerciseFormProps
): ActionResponse<Exercise | null> {
	return { success: true, message: 'Exercise created successfully', data: null };
}
