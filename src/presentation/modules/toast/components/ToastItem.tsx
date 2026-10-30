'use client';

import { TOAST_TYPE } from '@/presentation/globals/config/defaults';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import styles from '@/presentation/modules/toast/components/Toast.module.css';
import type { Toast } from '@/presentation/globals/presentation.types';

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

const TOAST_ICONS: Record<Toast['type'], IconName> = {
  info: 'circle-alert',
  success: 'check',
  error: 'octagon-alert',
  warning: 'triangle-alert',
};

export function ToastItem({ toast, onClose }: Props) {
  const type = toast.type || TOAST_TYPE;

  return (
    <div
      className={`animate-fade-up animate-duration-200 flex w-96 min-w-2xs items-center justify-between rounded-lg p-4 pb-4.5 shadow-lg shadow-black/10 ${styles.toast} ${TOAST_TYPES[type]}`}
    >
      <main className="flex items-center gap-2">
        <div className="-mb-1">
          <Icon
            icon={TOAST_ICONS[type]}
            variant={{ size: 'lg', weight: 'moderate' }}
          />
        </div>
        <span className="block w-fit font-semibold">{toast.message}</span>
      </main>
      <button
        type="button"
        onClick={onClose}
        className="text-fg-subtle cursor-pointer transition-opacity hover:opacity-50"
      >
        <Icon icon="x" className="size-5" variant={{ weight: 'moderate' }} />
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
