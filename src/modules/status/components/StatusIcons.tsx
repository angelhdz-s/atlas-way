import { CircleOutline } from '@/presentation/globals/components/Icons';
import {
  SolidCircleCheck,
  SolidCircleX,
} from '@/presentation/globals/components/SolidIcons';

export function CompletedIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <SolidCircleCheck
      className={`${className} fg-complete`}
    />
  );
}

export function CanceledIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <SolidCircleX className={`${className} fg-cancel`} />
  );
}

export function PendingIcon({
  className,
}: {
  className?: string;
}) {
  return <CircleOutline className={`${className}`} />;
}

export function StatusIcon({
  status,
  className = '',
}: {
  status: string;
  className?: string;
}) {
  if (status === 'completed') {
    return <CompletedIcon className={className} />;
  }
  if (status === 'canceled') {
    return <CanceledIcon className={className} />;
  }
  return <PendingIcon className={className} />;
}
