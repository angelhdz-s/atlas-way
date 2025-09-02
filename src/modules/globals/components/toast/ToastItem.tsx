"use client";

import { TOAST_TYPE } from "@/modules/globals/config/defaults";
import {
	CircleCheck,
	AlertTriangle,
	InformationCircle,
	XCircle,
	XMark,
} from "@/modules/globals/components/Icons";
import styles from "@/modules/globals/components/toast/Toast.module.css";
import { Toast } from "@/modules/globals/types.d";

interface Props {
	toast: Toast;
	onClose: () => void;
}

const TOAST_TYPES = {
	info: styles.info,
	success: styles.success,
	error: styles.error,
	warning: styles.warning,
};

const TOAST_ICONS = {
	info: <InformationCircle className="size-6" />,
	success: <CircleCheck className="size-6" />,
	error: <XCircle className="size-6" />,
	warning: <AlertTriangle className="size-6" />,
};

export function ToastItem({ toast, onClose }: Props) {
	const type = toast.type || TOAST_TYPE;

	return (
		<div
			className={`animate-fade-up animate-duration-200 rounded p-4 pb-4.5 shadow-lg shadow-black/10 flex justify-between items-center min-w-2xs ${styles.toast} ${TOAST_TYPES[type]}`}
		>
			<main className="flex items-center gap-2">
				<div className="-mb-1">{TOAST_ICONS[type]}</div>
				<span className="block w-fit">{toast.message}</span>
			</main>
			<button onClick={onClose} className="cursor-pointer">
				<XMark className="size-4" />
			</button>
			<div className="h-1 absolute bottom-0 left-0 w-full mask-l-from-50% mask-l-to-110%">
				<span
					className={`mask-r-from-100% mask-r-to-4 ${styles.toast_time_fill}`}
					style={{ animationDuration: `${toast.duration}ms` }}
				></span>
			</div>
		</div>
	);
}
