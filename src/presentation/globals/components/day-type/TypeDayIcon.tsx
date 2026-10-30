import { Icon } from '@/presentation/modules/icon/components/Icon';

export function TypeDayIcon({
  className = '',
  type,
}: {
  className?: string;
  type: string;
}) {
  return (
    <Icon
      icon={type === 'training' ? 'dumbbell' : 'bed'}
      className={className}
      variant={{ size: 'lg', weight: 'medium' }}
    />
  );
}
