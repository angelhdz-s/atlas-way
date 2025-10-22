'use client';

import { SidebarSection } from '@/modules/sidebar/components/SidebarSection';
import { Barbell, ClipboardList, Man, MapRoute } from '@/modules/globals/components/Icons';
import { NavLink, NavLinks } from './nav/NavLink';

export function SidebarMainSection() {
	return (
		<SidebarSection name="Main">
			<NavLinks>
				<NavLink href="/dashboard/routines" Icon={MapRoute}>
					Routines
				</NavLink>

				<NavLink href="/dashboard/sessions" Icon={ClipboardList}>
					Sessions
				</NavLink>

				<NavLink href="/dashboard/exercises" Icon={Barbell}>
					Exercises
				</NavLink>

				<NavLink href="/dashboard/muscles" Icon={Man}>
					Muscles
				</NavLink>
			</NavLinks>
		</SidebarSection>
	);
}
