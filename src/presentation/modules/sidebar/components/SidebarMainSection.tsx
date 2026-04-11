'use client';

import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import {
  IconBarbell,
  IconMan,
  IconRouteX,
  IconSchema,
} from '@/presentation/globals/components/icons/Icons';
import { NavLink } from './nav/NavLink';
import { NavLinks } from './nav/NavLinks';
import { NavLinkIcon } from './nav/NavLinkIcon';

export function SidebarMainSection() {
  return (
    <SidebarSection name="Main">
      <NavLinks>
        <NavLink href="/dashboard/routines" label="Routines">
          <NavLinkIcon Icon={IconRouteX} />
        </NavLink>

        <NavLink href="/dashboard/sessions" label="Sessions">
          <NavLinkIcon Icon={IconSchema} />
        </NavLink>

        <NavLink href="/dashboard/exercises" label="Exercises">
          <NavLinkIcon Icon={IconBarbell} />
        </NavLink>

        <NavLink href="/dashboard/muscles" label="Muscles">
          <NavLinkIcon Icon={IconMan} />
        </NavLink>
      </NavLinks>
    </SidebarSection>
  );
}
