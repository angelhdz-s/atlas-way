import { SubLink } from '@/presentation/modules/sidebar/components/nav/SubLink';
import { NavIconSize } from '@/presentation/modules/sidebar/components/nav/NavConstants';
import { NotificationsCounter } from '@/modules/notification/presentation/ui/components/NotificationsCounter';
import { IconBell } from '@/presentation/globals/components/Icons';

export function NavLinkNotification({
  href,
}: {
  href: string;
}) {
  const notificationsCount = 5;
  return (
    <div className="group relative">
      <SubLink href={href}>
        <NavIconSize Icon={IconBell} /> Notifications
        {notificationsCount && (
          <NotificationsCounter
            count={notificationsCount}
          />
        )}
      </SubLink>
    </div>
  );
}
