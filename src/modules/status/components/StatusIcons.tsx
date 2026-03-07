import { IconCircleOutline } from '@/presentation/globals/components/Icons';
import {
  IconSolidCircleCheck,
  IconSolidCircleX,
} from '@/presentation/globals/components/SolidIcons';

export function CompletedIcon({ className }: { className?: string }) {
  return <IconSolidCircleCheck className={`${className} fg-complete`} />;
}

export function CanceledIcon({ className }: { className?: string }) {
  return <IconSolidCircleX className={`${className} fg-cancel`} />;
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
