import { IconCircleOutline } from '@/presentation/globals/components/icons/outline/IconCircleOutline';
import { SIconCircleCheck } from '@/presentation/globals/components/icons/solid/SIconCircleCheck';
import { SIconCircleX } from '@/presentation/globals/components/icons/solid/SIconCircleX';

export function CompletedIcon({ className }: { className?: string }) {
  return <SIconCircleCheck className={`${className} text-complete`} />;
}

export function CanceledIcon({ className }: { className?: string }) {
  return <SIconCircleX className={`${className} text-cancel`} />;
}

export function PendingIcon({ className }: { className?: string }) {
  return <IconCircleOutline className={`${className}`} />;
}

export function StatusIcon({ status, className = '' }: { status: string; className?: string }) {
  if (status === 'completed') {
    return <CompletedIcon className={className} />;
  }
  if (status === 'canceled') {
    return <CanceledIcon className={className} />;
  }
  return <PendingIcon className={className} />;
}
