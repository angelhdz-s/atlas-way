"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/modules/dashboard/components/sidebar/Sidebar.module.css";
import { IconTypes } from "@/modules/globals/types.d";
import { useSidebar } from "../hooks/useSidebar";
import { NotificationsCounter } from "./NotificationsCounter";
import { Bell } from "@/modules/globals/components/Icons";

function NavIconSize({ Icon }: { Icon: IconTypes }) {
	const { isOpen } = useSidebar();
	return <Icon className={`size-5 ${isOpen ? "" : "mx-auto"}`} />;
}

function NavLinkBody({ title }: { title: React.ReactNode }) {
	return (
		<div
			className="absolute h-full left-16 top-0 
			rounded ld-sec-bg border-1 border-foreground/10
			hidden group-hover:grid place-content-center
			"
		>
			<span className="px-4 flex items-center gap-2 whitespace-nowrap">
				{title}
			</span>
		</div>
	);
}

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

export function NavLinkNotification({ href }: { href: string }) {
	const { isOpen } = useSidebar();
	const notificationsCount = 5;
	return (
		<div className="relative group">
			<SubLink
				href={href}
				className={`${isOpen ? "" : "before:absolute before:top-2 before:right-2 before:z-2 before:size-2 before:bg-blue-600 before:rounded-full"}`}
			>
				<NavIconSize Icon={Bell} />
				{isOpen && "Notifications"}
				{notificationsCount && isOpen && (
					<NotificationsCounter count={notificationsCount} />
				)}
			</SubLink>
			{!isOpen && (
				<NavLinkBody
					title={
						<>
							Notifications
							<NotificationsCounter count={notificationsCount} />
						</>
					}
				/>
			)}
		</div>
	);
}

export function SubLink({
	className = "",
	href,
	children,
}: {
	className?: string;
	href: string;
	children: React.ReactNode;
}) {
	const { isOpen } = useSidebar();
	const pathname = usePathname();

	const aditionalClassName = `${pathname === href ? styles.active : ""}`;

	return (
		<Link
			href={href}
			className={`relative transition-colors hover:bg-foreground/10 hover:text-current/50 ${styles.nav_link} ${isOpen ? "" : styles.closed} ${className} ${aditionalClassName}`}
		>
			{children}
		</Link>
	);
}
