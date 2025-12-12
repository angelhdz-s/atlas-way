'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/modules/sidebar/components/Sidebar.module.css';

const isActiveLink = (path: string, href: string) => {
	return path === href || (path.startsWith(href) && href !== '/' && href !== '/dashboard');
};

export function SubLink({
	className = '',
	href,
	children,
}: {
	className?: string;
	href: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const aditionalClassName = isActiveLink(pathname, href) ? styles.active : '';

	return (
		<Link
			href={href}
			className={`relative hover:bg-foreground/10 hover:text-current/80 ${styles.nav_link} ${className} ${aditionalClassName}`}
		>
			{children}
		</Link>
	);
}
