"use client";

import { useActionState } from "react";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";

export function useExerciseForm() {
	const [state, action, isPending] = useActionState(createExerciseAction, null);

	return {
		state,
		action,
		isPending,
	};
}
