import Link from "next/link";
import styles from "@/modules/dashboard/components/sidebar/Sidebar.module.css";
import { useSidebar } from "@/modules/dashboard/hooks/useSidebar";
import { usePathname } from "next/navigation";

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
