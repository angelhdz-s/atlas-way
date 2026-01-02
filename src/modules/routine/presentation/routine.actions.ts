'use server';

import { ActionResponseType } from '@/presentation/globals/types';
import { RoutineForm, routineFormSchema } from './ui/config/routine-schema';

export async function createRoutineAction(data: RoutineForm): Promise<ActionResponseType> {
	const parsedData = routineFormSchema.safeParse(data);
	if (!parsedData.success) {
		const errors = parsedData.error;
		console.log(errors);
		return { success: false, message: 'Invalid form data' };
	}
	const error = await createRoutine(data);
	if (error) return { success: false, message: error };
	return { success: true, message: 'Routine created successfully' };
}

export async function createRoutine(data: RoutineForm): Promise<string | null> {
	const result = routineFormSchema.safeParse(data);
	if (!result.success) {
		return result.error.issues.map((issue) => issue.message).join(', ');
	}

	return null;
}
