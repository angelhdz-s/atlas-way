import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/modules/sidebar/components/Sidebar.module.css';
import { useSidebar } from '@/modules/sidebar/hooks/useSidebar';

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
	const { isOpen } = useSidebar();
	const pathname = usePathname();

	const aditionalClassName = isActiveLink(pathname, href) ? styles.active : '';

	return (
		<Link
			href={href}
			className={`relative hover:bg-foreground/10 hover:text-current/80 ${styles.nav_link} ${isOpen ? '' : styles.closed} ${className} ${aditionalClassName}`}
		>
			{children}
		</Link>
	);
}
