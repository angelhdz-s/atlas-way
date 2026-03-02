import {
  IconBell,
  DefaultIcon,
} from '@/presentation/globals/components/Icons';

export function NotificationsButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
    >
      <DefaultIcon Icon={IconBell} />
    </button>
  );
}
