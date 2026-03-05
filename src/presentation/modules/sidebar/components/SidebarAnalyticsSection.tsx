import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import { IconReportAnalytics } from '@/presentation/globals/components/Icons';
import { NavLink, NavLinks } from './nav/NavLink';

export function SidebarAnalyticsSection() {
  return (
    <SidebarSection name="Analytics">
      <NavLinks>
        <NavLink
          href="/dashboard/statistics"
          Icon={IconReportAnalytics}
        >
          Statistics
        </NavLink>
      </NavLinks>
    </SidebarSection>
  );
}
