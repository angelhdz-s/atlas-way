"use client";

import { useActionState, useEffect } from "react";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";
import { SelectOption } from "@/modules/form/types";
import { MuscleIdName } from "@/modules/muscle/types";
import { useToast } from "@/modules/toast/hooks/useToast";

export function useExerciseForm({ muscles }: { muscles: MuscleIdName[] }) {
	const { addToast } = useToast();
	const [state, action, isPending] = useActionState(createExerciseAction, null);

	const muscleOptions: SelectOption[] = muscles.map((muscle) => ({
		value: muscle.id.toString(),
		label: muscle.name,
	}));

	useEffect(() => {
		if (!state) return;
		if (!state.success) {
			addToast(state.message, { type: "error" });
		} else if (state.success) {
			addToast("Data sended correctly", { type: "success" });
		}
	}, [state, addToast]);

	return {
		action,
		isPending,
		muscleOptions,
	};
}
