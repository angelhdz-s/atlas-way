'use server';

import { ActionResponseType } from '@/presentation/globals/types';
import { RoutineForm, routineFormSchema } from './ui/config/routine-schema';

export async function createRoutineAction(data: RoutineForm): Promise<ActionResponseType> {
	const parsedRoutine = routineFormSchema.safeParse(data);
	if (!parsedRoutine.success) {
		const errors = parsedRoutine.error;
		console.log(errors);
		return { success: false, message: 'Invalid form data' };
	}
	const error = await createRoutine(data);
	if (error) return { success: false, message: error };
	return { success: true, message: 'Routine created successfully' };
}

export async function createRoutine(data: RoutineForm): Promise<string | null> {
	const parsedRoutineForm = routineFormSchema.safeParse(data);
	if (!parsedRoutineForm.success) {
		return parsedRoutineForm.error.issues.map((issue) => issue.message).join(', ');
	}

	return null;
}
