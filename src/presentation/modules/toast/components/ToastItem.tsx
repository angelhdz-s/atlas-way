'use client';

import { TOAST_TYPE } from '@/presentation/globals/config/defaults';
import {
  IconCircleCheck,
  IconAlertTriangle,
  IconInformationCircle,
  IconXCircle,
  IconXMark,
} from '@/presentation/globals/components/Icons';
import type { Toast } from '@/presentation/globals/types.d';
import styles from './Toast.module.css';

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
  info: <IconInformationCircle className="size-6" />,
  success: <IconCircleCheck className="size-6" />,
  error: <IconXCircle className="size-6" />,
  warning: <IconAlertTriangle className="size-6" />,
};

export function ToastItem({ toast, onClose }: Props) {
  const type = toast.type || TOAST_TYPE;

  return (
    <div
      className={`animate-fade-up animate-duration-200 flex w-96 min-w-2xs items-center justify-between rounded-lg p-4 pb-4.5 shadow-lg shadow-black/10 ${styles.toast} ${TOAST_TYPES[type]}`}
    >
      <main className="flex items-center gap-2">
        <div className="-mb-1">{TOAST_ICONS[type]}</div>
        <span className="block w-fit font-semibold">
          {toast.message}
        </span>
      </main>
      <button
        type="button"
        onClick={onClose}
        className="fg-muted cursor-pointer transition-opacity hover:opacity-50"
      >
        <IconXMark className="size-5" />
      </button>
      <div className="absolute bottom-0 left-0 h-1 w-full mask-l-from-50% mask-l-to-110%">
        <span
          className={`mask-r-from-100% mask-r-to-4 ${styles.toast_time_fill}`}
          style={{
            animationDuration: `${toast.duration}ms`,
          }}
        ></span>
      </div>
    </div>
  );
}
