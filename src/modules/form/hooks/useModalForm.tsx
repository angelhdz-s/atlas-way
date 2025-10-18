"use client";

import { useEffect, useRef, useState } from "react";
import { ActionResponseType } from "@/modules/globals/types";
import { useToast } from "@/modules/toast/hooks/useToast";

export function useModalForm() {
	const [state, setState] = useState<ActionResponseType | null>(null);
	const isAlreadySuccess = useRef(false);
	const { addToast } = useToast();

	useEffect(() => {
		if (!state || !state.success) return;
		if (isAlreadySuccess.current) return;
		isAlreadySuccess.current = true;
	}, [state, isAlreadySuccess]);

	useEffect(() => {
		if (!state) return;
		const toastType = state.success ? "success" : "error";
		addToast(state.message, { type: toastType });
	}, [state, addToast]);

	return { setState };
}
