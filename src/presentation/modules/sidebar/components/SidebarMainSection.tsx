'use client';

import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import {
  IconBarbell,
  IconClipboardList,
  IconMan,
  IconMapRoute,
} from '@/presentation/globals/components/Icons';
import { NavLink, NavLinks } from './nav/NavLink';

export function SidebarMainSection() {
  return (
    <SidebarSection name="Main">
      <NavLinks>
        <NavLink
          href="/dashboard/routines"
          Icon={IconMapRoute}
        >
          Routines
        </NavLink>

        <NavLink
          href="/dashboard/sessions"
          Icon={IconClipboardList}
        >
          Sessions
        </NavLink>

        <NavLink
          href="/dashboard/exercises"
          Icon={IconBarbell}
        >
          Exercises
        </NavLink>

        <NavLink href="/dashboard/muscles" Icon={IconMan}>
          Muscles
        </NavLink>
      </NavLinks>
    </SidebarSection>
  );
}
