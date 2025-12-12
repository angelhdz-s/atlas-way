import { SubLink } from '@/modules/sidebar/components/nav/SubLink';
import { NavIconSize } from '@/modules/sidebar/components/nav/NavConstants';
import { NotificationsCounter } from '@/modules/notification/components/NotificationsCounter';
import { Bell } from '@/modules/globals/components/Icons';

export function NavLinkNotification({ href }: { href: string }) {
	const notificationsCount = 5;
	return (
		<div className="relative group">
			<SubLink href={href}>
				<NavIconSize Icon={Bell} /> Notifications
				{notificationsCount && <NotificationsCounter count={notificationsCount} />}
			</SubLink>
		</div>
	);
}
