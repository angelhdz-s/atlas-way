"use client";

import { useCallback, useEffect, useState } from "react";
import { TOAST_DURATION, TOAST_TYPE } from "@/config/defaults";
import ToastContainer from "@/modules/globals/components/toast/ToastContainer";
import { ToastContext } from "@/modules/globals/contexts/toast-context";
import { generateId } from "@/modules/globals/lib/toast";
import { Toast } from "@/modules/globals/types.d";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const [mounted, setMounted] = useState(false);

	const addToast = useCallback(
		(message: string, options?: Partial<Omit<Toast, "id" | "message">>) => {
			const toast: Toast = {
				id: generateId(),
				message,
				type: options?.type || TOAST_TYPE,
				duration: options?.duration ?? TOAST_DURATION,
			};
			setToasts((prev) => [...prev, toast]);

			// Auto-remove after duration
			setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== toast.id));
			}, toast.duration);
		},
		[],
	);

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			{mounted && <ToastContainer toasts={toasts} onRemove={removeToast} />}
		</ToastContext.Provider>
	);
};
