"use client";

import { useEffect, useRef } from "react";
import { ActionResponseType } from "@/modules/globals/types";
import { useToast } from "@/modules/toast/hooks/useToast";

export function useForm({
	state,
	onSuccess,
}: {
	state?: ActionResponseType | null;
	onSuccess?: () => void;
}) {
	const isAlreadySuccess = useRef(false);
	const { addToast } = useToast();

	useEffect(() => {
		if (!state || !state.success || !onSuccess) return;
		if (isAlreadySuccess.current) return;
		isAlreadySuccess.current = true;
		onSuccess?.();
	}, [state, onSuccess, isAlreadySuccess]);

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
}
