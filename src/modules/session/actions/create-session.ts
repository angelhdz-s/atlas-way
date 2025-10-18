"use server";

import {
	validateExerciseDescription,
	validateExerciseName,
} from "@/modules/exercise/lib/exercise-form-valdation";
import { ActionResponseType } from "@/modules/globals/types";
import { getUserId } from "@/modules/user/actions/users";
import { PrismaClient } from "@/prisma/client";

const prisma = new PrismaClient();

export async function createSessionAction(
	previousState: unknown,
	formData: FormData,
): Promise<ActionResponseType> {
	const error = await createSession(formData);
	if (error) return { success: false, message: error };
	return { success: true, message: "Session created successfully" };
}

export async function createSession(
	formData: FormData,
): Promise<string | null> {
	const { name, description, exercises } = Object.fromEntries(formData);

	const nameErrors = validateExerciseName(name as string);
	if (nameErrors) return nameErrors;

	const descriptionErrors = validateExerciseDescription(description as string);
	if (descriptionErrors) return descriptionErrors;

	const exercisesArray = (exercises as string)?.split(",");
	if (
		!exercisesArray ||
		exercisesArray.length === 0 ||
		(exercisesArray.length === 1 && !exercisesArray[0])
	) {
		return "At least one exercise is required";
	}

	const userId = await getUserId();
	if (!userId) {
		return "User not found";
	}

	const sessionId = crypto.randomUUID();
	const exercisesIds = exercisesArray.map((id) => ({ id }));

	try {
		await prisma.$transaction([
			prisma.sessions.create({
				data: {
					id: sessionId,
					name: name as string,
					description: description as string | null,
					userId: userId.id,
					exercises: {
						connect: exercisesIds,
					},
				},
			}),
		]);
	} catch {
		return "Error creating session";
	}

	return null;
}
