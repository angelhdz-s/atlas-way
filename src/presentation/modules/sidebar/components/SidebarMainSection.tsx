'use client';

import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import {
  IconBarbell,
  IconMan,
  IconRouteX,
  IconSchema,
} from '@/presentation/globals/components/Icons';
import { NavLink, NavLinks } from './nav/NavLink';

export function SidebarMainSection() {
  return (
    <SidebarSection name="Main">
      <NavLinks>
        <NavLink href="/dashboard/routines" Icon={IconRouteX}>
          Routines
        </NavLink>

        <NavLink href="/dashboard/sessions" Icon={IconSchema}>
          Sessions
        </NavLink>

        <NavLink href="/dashboard/exercises" Icon={IconBarbell}>
          Exercises
        </NavLink>

        <NavLink href="/dashboard/muscles" Icon={IconMan}>
          Muscles
        </NavLink>
      </NavLinks>
    </SidebarSection>
  );
}
