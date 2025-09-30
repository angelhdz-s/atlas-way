"use server";

import { ActionResponseType } from "@/modules/globals/types";

export async function createExerciseAction(
	previousState: unknown,
	formData: FormData,
): Promise<ActionResponseType> {
	await new Promise((resolve) => setTimeout(resolve, 300));
	const error = await createExercise(formData);
	if (error) return { success: false, message: error };
	return { success: true };
}

export async function createExercise(formData: FormData) {
	const { name, description, sets, reps, weight, muscles } =
		Object.fromEntries(formData);
	if (!name) return "Name is required";

	console.log({ name, description, sets, reps, weight, muscles });
	return null;
}
