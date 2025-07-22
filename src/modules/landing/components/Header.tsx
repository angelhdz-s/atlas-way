import Link from "next/link";

export function Header() {
	return (
		<header className="w-full h-12 bg-zinc-900">
			<main className="flex items-center justify-between gap-4 max-w-5xl mx-auto h-full *:h-full **:h-full">
				<aside className="h-full">
					<Link href="/" className="flex items-center text-2xl font-semibold">
						AtlasWay
					</Link>
				</aside>
				<nav className="">
					<ul className="flex items-center gap-4 *:h-full *:w-fit **:grid **:place-items-center text-center">
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
				<div>
					<button type="button">Dark Mode</button>
				</div>
			</main>
		</header>
	);
}
