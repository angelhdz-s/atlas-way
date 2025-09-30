"use server";

import { ActionResponseType } from "@/modules/globals/types";

export async function createSessionAction(
	previousState: unknown,
	formData: FormData,
): Promise<ActionResponseType> {
	const error = await createSession(formData);
	if (error) return { success: false, message: error };
	return { success: true };
}

export async function createSession(formData: FormData) {
	const data = Object.fromEntries(formData);
	console.log("Creating session with data:", data);
	return null;
}
