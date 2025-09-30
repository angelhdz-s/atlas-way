"use server";

import { ActionResponseType } from "@/modules/globals/types";
import { PrismaClient } from "@/prisma/client";
import {
	validateExerciseDescription,
	validateExerciseName,
	validateExerciseReps,
	validateExerciseSets,
	validateExerciseWeight,
} from "../lib/exercise-form-valdation";
import { getUserId } from "@/modules/user/actions/users";

const prisma = new PrismaClient();

export async function createExerciseAction(
	previousState: unknown,
	formData: FormData,
): Promise<ActionResponseType> {
	await new Promise((resolve) => setTimeout(resolve, 300));
	const error = await createExercise(formData);
	if (error) return { success: false, message: error };
	return { success: true };
}

export async function createExercise(
	formData: FormData,
): Promise<string[] | null> {
	const errors: string[] = [];
	const { name, description, sets, reps, weight, muscles } =
		Object.fromEntries(formData);

	const nameError = validateExerciseName(name as string);
	if (nameError) errors.push(nameError);

	const descriptionError = validateExerciseDescription(description as string);
	if (descriptionError) errors.push(descriptionError);

	const [setsN, repsN, weightN] = [Number(sets), Number(reps), Number(weight)];

	const setsError = validateExerciseSets(setsN);
	if (setsError) errors.push(setsError);

	const repsError = validateExerciseReps(repsN);
	if (repsError) errors.push(repsError);

	const weightError = validateExerciseWeight(weightN);
	if (weightError) errors.push(weightError);

	const musclesArray = (muscles as string)
		?.split(",")
		.map((m) => Number(m.trim()));
	if (
		!musclesArray ||
		musclesArray.length === 0 ||
		(musclesArray.length === 1 && musclesArray[0] === 0)
	) {
		errors.push("At least one muscle is required");
	}

	if (errors.length > 0) return errors;

	const exerciseId = crypto.randomUUID();
	const userId = await getUserId();
	if (!userId?.id) {
		errors.push("User not found");
		return errors;
	}

	console.log({
		data: {
			id: exerciseId,
			userId: userId.id,
			name: name as string,
			description: description as string | null,
			muscles: musclesArray,
			exerciseId: exerciseId,
			sets: setsN || 0,
			reps: repsN || 0,
			weight: weightN || 0,
		},
	});

	try {
		await prisma.$transaction([
			prisma.exercises.create({
				data: {
					id: exerciseId,
					userId: userId.id,
					name: name as string,
					description: description as string | null,
					muscles: {
						connect: musclesArray.map((id) => ({ id })),
					},
				},
			}),
			prisma.exerciseInitialStats.create({
				data: {
					id: crypto.randomUUID(),
					exerciseId: exerciseId,
					sets: setsN || 0,
					reps: repsN || 0,
					weight: weightN || 0,
				},
			}),
		]);
	} catch {
		errors.push("Error creating exercise");
	}

	return errors.length > 0 ? errors : null;
}
