"use client";

import { createPortal } from "react-dom";
import { ToastItem } from "@/modules/globals/components/toast/ToastItem";
import type { Toast } from "@/modules/globals/types.d";

interface Props {
	toasts: Toast[];
	onRemove: (id: string) => void;
}

export default function ToastContainer({ toasts, onRemove }: Props) {
	if (typeof window === "undefined") return null;

	return createPortal(
		<div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-100">
			{toasts.map((toast) => (
				<ToastItem
					key={toast.id}
					toast={toast}
					onClose={() => onRemove(toast.id)}
				/>
			))}
		</div>,
		document.body,
	);
}
