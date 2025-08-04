import { createContext } from "react";
import { Toast } from "@/modules/globals/types.d";

interface ToastContextType {
	addToast: (
		message: string,
		options?: Partial<Omit<Toast, "id" | "message">>,
	) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
	undefined,
);
