import Link from "next/link";
import { AtlasWayLogo } from "@/modules/globals/components/AtlasWayLogo";
import { useSidebar } from "../../hooks/useSidebar";
import { NavLink, NavLinkNotification, NavLinks } from "../NavLink";
import { Forward, Home } from "@/modules/globals/components/Icons";

export function SidebarHeader() {
	const { isOpen } = useSidebar();
	return (
		<header>
			<Link
				href="/"
				className={`flex items-center font-bold font-funnel-display py-4 ${isOpen ? "px-6" : "w-fit mx-auto"}`}
			>
				<AtlasWayLogo
					className={`${isOpen ? "text-2xl" : "text-lg [writing-mode:vertical-rl]"} transition-all`}
				/>
			</Link>
			<NavLinks>
				<NavLink href="/dashboard" Icon={Home}>
					Home
				</NavLink>

				<NavLinkNotification href="/dashboard/notifications" />

				<NavLink href="/dashboard/tracking" Icon={Forward}>
					Session Tracking
				</NavLink>
			</NavLinks>
		</header>
	);
}
