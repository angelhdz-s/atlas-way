"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export function NavLink({
	className = "",
	href,
	children,
}: {
	className?: string;
	href: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={`transition-colors hover:bg-foreground/10 hover:text-current/50 ${className} ${pathname === href ? `${styles.active} light:${styles.light_active}` : ""}`}
		>
			{children}
		</Link>
	);
}
