import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import { IconReportAnalytics } from '@/presentation/globals/components/Icons';
import { NavLink } from './nav/NavLink';
import { NavLinks } from './nav/NavLinks';
import { NavLinkIcon } from './nav/NavLinkIcon';

export function SidebarAnalyticsSection() {
  return (
    <SidebarSection name="Analytics">
      <NavLinks>
        <NavLink href="/dashboard/statistics" label="Statistics">
          <NavLinkIcon Icon={IconReportAnalytics} />
        </NavLink>
      </NavLinks>
    </SidebarSection>
  );
}
