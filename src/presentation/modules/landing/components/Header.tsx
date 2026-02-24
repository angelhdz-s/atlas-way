import Link from 'next/link';
import { ToggleTheme } from '@/presentation/globals/components/ToggleTheme';
import { SessionButtons } from '@/modules/auth/presentation/ui/components/SessionButtons';
import { Imagotype } from '@/presentation/globals/components/AppLogo';
import { HeaderNav } from '../../nav/components/HeaderNav';

export function Header({ className = '' }: { className?: string }) {
	return (
		<header className={`h-14 ${className}`}>
			<main className="fixed h-14 w-full ld-sec-bg z-10">
				<div className="top-0 left-0 w-full flex items-center justify-between gap-1 md:gap-4 max-w-5xl mx-auto h-14 px-4 md:px-4 lg:px-0">
					<div
						className="flex flex-row items-center justify-start gap-2 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 w-full
						md:justify-between
						"
					>
						<aside className="w-fit">
							<Link href="/" className="flex items-center gap-2">
								<Imagotype />
							</Link>
						</aside>
						<HeaderNav />
						<div className="flex items-center justify-end gap-0 md:gap-2">
							<ToggleTheme className="btn-md" />
							<SessionButtons />
						</div>
					</div>
				</div>
			</main>
		</header>
	);
}
