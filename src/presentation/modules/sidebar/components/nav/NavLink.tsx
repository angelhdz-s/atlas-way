import { IconTypes } from '@/modules/globals/types.d';
import { NavIconSize } from '@/presentation/modules/sidebar/components/nav/NavConstants';
import { SubLink } from '@/presentation/modules/sidebar/components/nav/SubLink';

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
	return (
		<div className="relative group">
			<SubLink href={href}>
				<NavIconSize Icon={Icon} />
				{children}
			</SubLink>
		</div>
	);
}
