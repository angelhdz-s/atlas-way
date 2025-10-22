'use client';

import { createPortal } from 'react-dom';
import type { Toast } from '@/modules/globals/types.d';
import { ToastItem } from '@/modules/toast/components/ToastItem';

interface Props {
	toasts: Toast[];
	onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: Props) {
	if (typeof window === 'undefined') return null;

	return createPortal(
		<div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-100">
			{toasts.map((toast) => (
				<ToastItem key={toast.id} toast={toast} onClose={() => onRemove(toast.id)} />
			))}
		</div>,
		document.body
	);
}
