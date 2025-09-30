"use client";

import { useActionState, useEffect, useRef } from "react";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";
import { useToast } from "@/modules/toast/hooks/useToast";

export function useExerciseForm({ onSuccess }: { onSuccess?: () => void }) {
	const isSuccess = useRef(false);
	const { addToast } = useToast();
	const [state, action, isPending] = useActionState(createExerciseAction, null);

	useEffect(() => {
		if (!state) return;
		if (!state.success) {
			for (const message of state.message) {
				addToast(message, { type: "error" });
			}
		} else if (state.success) {
			addToast("Data sended correctly", { type: "success" });
		}
	}, [state, addToast]);

	useEffect(() => {
		if (!state || !state.success || !onSuccess) return;
		if (isSuccess.current) return;
		isSuccess.current = true;
		onSuccess?.();
	}, [state, onSuccess]);

	return {
		action,
		isPending,
	};
}
