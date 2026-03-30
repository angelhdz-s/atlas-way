import { IconBell, IconCalendarCheck, IconHome } from '@/presentation/globals/components/Icons';
import { NavLinkNotification } from './nav/custom/NavLinkNotification';
import { NavLink } from './nav/NavLink';
import { NavLinks } from './nav/NavLinks';
import { NavLinkIcon } from './nav/NavLinkIcon';

export function SidebarHeader() {
  return (
    <header>
      <NavLinks>
        <NavLink href="/dashboard" label="Home">
          <NavLinkIcon Icon={IconHome} />
        </NavLink>

        <NavLink href="/dashboard/notifications" label="Notifications">
          <NavLinkIcon Icon={IconBell} />
        </NavLink>

        {/* <NavLinkNotification Icon={IconBell} href="/dashboard/notifications" /> */}

        <NavLink href="/dashboard/tracking" label="Tracking">
          <NavLinkIcon Icon={IconCalendarCheck} />
        </NavLink>
      </NavLinks>
    </header>
  );
}
