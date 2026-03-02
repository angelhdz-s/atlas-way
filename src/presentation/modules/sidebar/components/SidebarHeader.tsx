import {
  IconCalendarWeek,
  IconHome,
} from '@/presentation/globals/components/Icons';
import { NavLinkNotification } from './nav/custom/NavLinkNotification';
import { NavLink, NavLinks } from './nav/NavLink';

export function SidebarHeader() {
  return (
    <header>
      <NavLinks>
        <NavLink href="/dashboard" Icon={IconHome}>
          Home
        </NavLink>

        <NavLinkNotification href="/dashboard/notifications" />

        <NavLink
          href="/dashboard/tracking"
          Icon={IconCalendarWeek}
        >
          Tracking
        </NavLink>
      </NavLinks>
    </header>
  );
}
