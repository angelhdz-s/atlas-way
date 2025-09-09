import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";
import { SubLink } from "@/modules/sidebar/components/nav/SubLink";
import { NavIconSize } from "@/modules/sidebar/components/nav/NavConstants";
import { NotificationsCounter } from "@/modules/notifications/components/NotificationsCounter";
import { NavLinkBody } from "@/modules/sidebar/components/nav/NavLinkBody";
import { Bell } from "@/modules/globals/components/Icons";

export function NavLinkNotification({ href }: { href: string }) {
	const { isOpen } = useSidebar();
	const notificationsCount = 5;
	return (
		<div className="relative group">
			<SubLink
				href={href}
				className={`${isOpen ? "" : "before:absolute before:top-2 before:right-2 before:z-2 before:size-2 before:bg-blue-600 before:rounded-full"}`}
			>
				<NavIconSize Icon={Bell} />
				{isOpen && "Notifications"}
				{notificationsCount && isOpen && (
					<NotificationsCounter count={notificationsCount} />
				)}
			</SubLink>
			{!isOpen && (
				<NavLinkBody
					title={
						<>
							Notifications
							<NotificationsCounter count={notificationsCount} />
						</>
					}
				/>
			)}
		</div>
	);
}
