'use client';

import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconMan } from '@/presentation/globals/components/icons/outline/IconMan';
import { IconRouteX } from '@/presentation/globals/components/icons/outline/IconRouteX';
import { IconSchema } from '@/presentation/globals/components/icons/outline/IconSchema';
import { NavLink } from '@/presentation/modules/sidebar/components/nav/NavLink';
import { NavLinks } from '@/presentation/modules/sidebar/components/nav/NavLinks';
import { NavLinkIcon } from '@/presentation/modules/sidebar/components/nav/NavLinkIcon';

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
