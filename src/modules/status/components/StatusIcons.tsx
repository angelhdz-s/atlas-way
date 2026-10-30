import { twMerge } from 'tailwind-merge';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function CompletedIcon({ className }: { className?: string }) {
  return <Icon icon="check" className={twMerge(className ?? '', 'text-success')} variant={{ size: 'lg' }} />;
}

export function CanceledIcon({ className }: { className?: string }) {
  return (
    <Icon
      icon="octagon-alert"
      className={twMerge(className ?? '', 'text-danger')}
      variant={{ size: 'lg' }}
    />
  );
}

export function PendingIcon({ className }: { className?: string }) {
  return <Icon icon="circle-dot" className={className ?? ''} variant={{ size: 'lg' }} />;
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
