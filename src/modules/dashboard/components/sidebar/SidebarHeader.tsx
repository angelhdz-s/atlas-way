import { CalendarDays, Home } from "@/modules/globals/components/Icons";
import { NavLinkNotification } from "./nav/custom/NavLinkNotification";
import { NavLink, NavLinks } from "./nav/NavLink";

export function SidebarHeader() {
	return (
		<header>
			<NavLinks>
				<NavLink href="/dashboard" Icon={Home}>
					Home
				</NavLink>

				<NavLinkNotification href="/dashboard/notifications" />

				<NavLink href="/dashboard/tracking" Icon={CalendarDays}>
					Tracking
				</NavLink>
			</NavLinks>
		</header>
	);
}
