import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconBarbellOff } from '@/presentation/globals/components/icons/outline/IconBarbellOff';

export function TrainingIcon({
  className = '',
  strokeWidth = '2',
}: {
  className?: string;
  strokeWidth?: string;
}) {
  return <IconBarbell className={className} strokeWidth={strokeWidth} />;
}

export function RestIcon({
  className = '',
  strokeWidth = '2',
}: {
  className?: string;
  strokeWidth?: string;
}) {
  return <IconBarbellOff className={className} strokeWidth={strokeWidth} />;
}

export function TypeDayIcon({
  className = '',
  strokeWidth = '2',
  type,
}: {
  className?: string;
  strokeWidth?: string;
  type: string;
}) {
  if (type === 'training') {
    return <TrainingIcon className={className} />;
  }
  return <RestIcon className={className} strokeWidth={strokeWidth} />;
}
