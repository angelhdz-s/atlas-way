'use server';

import { ActionResponseType } from '@/modules/globals/types';
import { RoutineForm, routineFormSchema } from '../config/routine-schema';
import { PrismaClient } from '@/prisma/client';
import { getUser } from '@/modules/user/actions/users';

const prisma = new PrismaClient();

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

	const user = await getUser();
	if (!user) {
		return 'User not found';
	}
	const routineId = crypto.randomUUID();

	try {
		await prisma.routines.create({
			data: {
				id: routineId,
				name: data.name,
				description: data.description,
				userId: user.id,
				initialDate: data.initialDate,
				routineCycleId: data.cycle,
			},
		});
	} catch (e) {
		console.error(e);
		return 'Error creating routine';
	}

	return null;
}
