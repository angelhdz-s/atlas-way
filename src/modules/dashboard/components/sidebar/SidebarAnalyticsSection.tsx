import { SidebarSection } from "./SidebarSection";
import { TrendingUp } from "@/modules/globals/components/Icons";
import { NavLink, NavLinks } from "./nav/NavLink";

export function SidebarAnalyticsSection() {
	return (
		<SidebarSection name="Analytics">
			<NavLinks>
				<NavLink href="/dashboard/statistics" Icon={TrendingUp}>
					Statistics
				</NavLink>
			</NavLinks>
		</SidebarSection>
	);
}
