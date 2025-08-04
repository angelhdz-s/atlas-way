"use client";

import { SidebarSection } from "@/modules/dashboard/components/sidebar/SidebarSection";
import {
	Bolt,
	ClipboardDocumentList,
	Clock,
	Scale,
} from "@/modules/globals/components/Icons";
import { NavLink, NavLinks } from "./nav/NavLink";

export function SidebarMainSection() {
	return (
		<SidebarSection name="Main">
			<NavLinks>
				<NavLink href="/dashboard/routines" Icon={ClipboardDocumentList}>
					Routines
				</NavLink>

				<NavLink href="/dashboard/sessions" Icon={Clock}>
					Sessions
				</NavLink>

				<NavLink href="/dashboard/exercises" Icon={Bolt}>
					Exercises
				</NavLink>

				<NavLink href="/dashboard/muscles" Icon={Scale}>
					Muscles
				</NavLink>
			</NavLinks>
		</SidebarSection>
	);
}
