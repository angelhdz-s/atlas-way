import { Breadcrumb } from './Breadcrumb';
import { ToggleTheme } from '@/modules/globals/components/ToggleTheme';
import { LangButton } from '@/modules/globals/components/LangButton';
import { SettingsButton } from '@/modules/globals/components/SettingsButton';
import { UserInfo } from './UserInfo';
import { NotificationsButton } from '../../notification/components/NotificationsButton';
import Link from 'next/link';
import { Imagotype } from '@/modules/globals/components/AtlasWayLogo';

export function Header({ className = '' }: { className?: string }) {
	return (
		<header className="h-(--header-height) w-full">
			<main
				className={`fixed top-0 left-0 z-10 w-full grid grid-cols-[1fr_auto_1fr] ld-sec-bg pr-2 gap-4 font-funnel-display h-(--header-height) ${className}`}
			>
				<section className="flex items-center gap-2 h-full">
					<main className="flex justify-between items-center gap-0 h-full pl-4 w-(--sidebar-width)">
						<Link
							href="/"
							className="flex items-center gap-2 font-light font-funnel-display"
						>
							<Imagotype />
						</Link>
					</main>
					<Breadcrumb />
				</section>
				<section className="flex items-center gap-2 h-full">
					<input
						type="search"
						placeholder="Search"
						className="flex-1 h-8 px-4 rounded-4xl border border-current/20 outline-none"
					/>
					<aside className="flex items-center">
						<NotificationsButton className="p-2 rounded-full" />
						<SettingsButton className="p-2 rounded-full" />
						<ToggleTheme className="p-2 rounded-full" />
						<LangButton className="p-2 rounded-full" />
					</aside>
				</section>
				<section className="flex items-center justify-end gap-2 h-full">
					<UserInfo />
				</section>
			</main>
		</header>
	);
}
