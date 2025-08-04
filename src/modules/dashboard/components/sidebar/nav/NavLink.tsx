"use client";

import { IconTypes } from "@/modules/globals/types.d";
import { useSidebar } from "../../../hooks/useSidebar";
import { NavIconSize } from "@/modules/dashboard/components/sidebar/nav/NavConstants";
import { NavLinkBody } from "@/modules/dashboard/components/sidebar/nav/NavLinkBody";
import { SubLink } from "./SubLink";

export function NavLinks({ children }: { children: React.ReactNode }) {
	return <nav className="flex flex-col gap-1">{children}</nav>;
}

export function NavLink({
	href,
	children,
	Icon,
}: {
	href: string;
	children: React.ReactNode;
	Icon: IconTypes;
}) {
	const { isOpen } = useSidebar();
	return (
		<div className="relative group">
			<SubLink href={href}>
				<NavIconSize Icon={Icon} />
				{isOpen && children}
			</SubLink>
			{!isOpen && <NavLinkBody title={children} />}
		</div>
	);
}
