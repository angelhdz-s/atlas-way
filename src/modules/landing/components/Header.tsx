import Link from "next/link";
import { AtlasWayLogo } from "@/modules/globals/components/AtlasWayLogo";
import { ToggleTheme } from "@/modules/globals/components/ToggleTheme";

export function Header({ className = "" }: { className?: string }) {
	return (
		<header
			className={`ld-main-fg w-full h-14 px-2 md:px-4 lg:px-0 ld-sec-bg ${className}`}
		>
			<main className="flex items-center justify-between gap-4 max-w-5xl mx-auto h-full ">
				<aside className="">
					<Link href="/" className="text-2xl font-semibold flex items-center">
						<AtlasWayLogo />
					</Link>
				</aside>
				<nav className="font-funnel-display font-medium">
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
					<a
						href="/login"
						className="rounded-full btn-md btn-primary py-1.5 animate-fade animate-delay-500"
					>
						Log In
					</a>
				</div>
			</main>
		</header>
	);
}
