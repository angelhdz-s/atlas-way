"use client";

import { useActionState } from "react";
import { createSessionAction } from "@/modules/session/actions/create-session";

export function useSessionForm() {
	const [state, action, isPending] = useActionState(createSessionAction, null);

	return {
		state,
		action,
		isPending,
	};
}
