'use server';

import { ActionResponseType } from '@/modules/globals/types';
import { getUserId } from '@/modules/user/actions/users';
import { PrismaClient } from '@/prisma/client';
import { SessionForm, sessionFormSchema } from '../config/session-schema';

const prisma = new PrismaClient();

export async function createSessionAction(data: SessionForm): Promise<ActionResponseType> {
	const error = await createSession(data);
	if (error) return { success: false, message: error };
	return { success: true, message: 'Session created successfully' };
}

export async function createSession(data: SessionForm): Promise<string | null> {
	const result = sessionFormSchema.safeParse(data);
	if (!result.success) {
		return result.error.issues.map((issue) => issue.message).join(', ');
	}

	const {} = data;

	const userId = await getUserId();
	if (!userId) {
		return 'User not found';
	}

	const sessionId = crypto.randomUUID();

	try {
		await prisma.$transaction([
			prisma.sessions.create({
				data: {
					id: sessionId,
					name: data.name,
					description: data.description,
					userId: userId.id,
					exercises: {
						connect: data.exercises,
					},
				},
			}),
		]);
	} catch {
		return 'Error creating session';
	}

	return null;
}
