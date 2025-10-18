"use server";

import { ActionResponseType } from "@/modules/globals/types";
import { RoutineForm, routineFormSchema } from "../config/routine-schema";

export async function createRoutine(
	data: RoutineForm,
): Promise<ActionResponseType> {
	const parsedData = routineFormSchema.safeParse(data);
	if (!parsedData.success) {
		const errors = parsedData.error;
		console.log(errors);
		return { success: false, message: "Invalid form data" };
	}
	console.log(parsedData.data);
	return { success: true, message: "Routine created successfully" };
}
