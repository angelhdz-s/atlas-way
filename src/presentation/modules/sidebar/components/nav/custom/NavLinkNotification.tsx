import { SubLink } from '@/presentation/modules/sidebar/components/nav/SubLink';
import { NotificationsCounter } from '@/modules/notification/presentation/ui/components/NotificationsCounter';
import type { IconTypes } from '@/presentation/globals/presentation.types';

export function NavLinkNotification({ href, Icon }: { href: string; Icon: IconTypes }) {
  const notificationsCount = 5;
  return (
    <div className="group relative">
      <SubLink href={href}>
        <Icon className="size-6" />
        <span className="hidden lg:inline">Notifications</span>
        <div className="absolute top-1 left-5">
          {notificationsCount && <NotificationsCounter count={notificationsCount} />}
        </div>
      </SubLink>
    </div>
  );
}
