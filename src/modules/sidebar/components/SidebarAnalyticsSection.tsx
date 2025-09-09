import { SidebarSection } from "@/modules/sidebar/components/SidebarSection";
import { ReportAnalytics } from "@/modules/globals/components/Icons";
import { NavLink, NavLinks } from "./nav/NavLink";

export function SidebarAnalyticsSection() {
	return (
		<SidebarSection name="Analytics">
			<NavLinks>
				<NavLink href="/dashboard/statistics" Icon={ReportAnalytics}>
					Statistics
				</NavLink>
			</NavLinks>
		</SidebarSection>
	);
}
