import Link from 'next/link';
import { Imagotype } from '@/modules/globals/components/AtlasWayLogo';
import { ToggleTheme } from '@/modules/globals/components/ToggleTheme';

export function Header({ className = '' }: { className?: string }) {
	return (
		<header className={`h-14 ${className}`}>
			<main className="fixed h-14 w-full ld-sec-bg z-10">
				<div className="top-0 left-0 w-full flex items-center justify-between gap-4 max-w-5xl mx-auto h-14 px-2 md:px-4 lg:px-0">
					<aside className="">
						<Link href="/" className="flex items-center gap-2">
							<Imagotype />
						</Link>
					</aside>
					<nav className="ld-main-fg font-funnel-display font-medium text-lg">
						<ul className="flex items-center gap-16 *:h-full *:w-fit *:grid *:place-items-center text-center">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">Exercises</Link>
							</li>
							<li>
								<Link href="/">Workouts</Link>
							</li>
						</ul>
					</nav>
					<div className="flex items-center gap-2">
						<ToggleTheme className="btn-md" />
						<Link
							href="/login"
							className="rounded-full btn-md btn-primary-outline py-1.5"
						>
							Log In
						</Link>
					</div>
				</div>
			</main>
		</header>
	);
}
