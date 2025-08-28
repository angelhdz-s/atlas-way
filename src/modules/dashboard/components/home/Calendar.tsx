import {
	Bolt,
	BoltSlash,
	CircleCheck,
	Clock,
} from "@/modules/globals/components/Icons";

function CalendarHeader({ className = "" }: { className?: string }) {
	return (
		<header className={` ${className}`}>
			<ul className="font-funnel-display font-light grid grid-cols-[1fr_auto_1fr]">
				<li className="text-foreground/50">July</li>
				<li className="text-xl ld-main-fg">August 2024</li>
				<li className="text-foreground/50 text-right">September</li>
			</ul>
		</header>
	);
}

function CalendarCurrentWeek({ className }: { className?: string }) {
	return (
		<ul
			className={`flex items-end justify-around gap-2 text-sm leading-[1.2] *:rounded-lg *:w-full  *:px-3 *:py-1 ${className}`}
		>
			<li className="bg-subtle/[0.05] text-xs font-normal flex flex-col items-center gap-2 text-foreground/70">
				<main>
					<header>Thu</header>
					<footer>07</footer>
				</main>
				<footer>
					<CircleCheck className="size-5 mx-auto" />
				</footer>
			</li>
			<li className="flex flex-col items-center gap-2 bg-subtle/10">
				<main>
					<header>Fri</header>
					<footer>08</footer>
				</main>
				<footer>
					<CircleCheck className="size-5 mx-auto" />
				</footer>
			</li>
			<li className="flex flex-col items-center gap-2 leading-[1.2] bg-subtle/10 text-xl text-accent font-medium">
				<main>
					<header>Sat</header>
					<footer>09</footer>
				</main>
				<footer>
					<Clock className="size-5 mx-auto" />
				</footer>
			</li>
			<li className="flex flex-col items-center gap-2 bg-subtle/10">
				<main>
					<header>Sun</header>
					<footer>10</footer>
				</main>
				<footer>
					<Bolt className="size-5 mx-auto" />
				</footer>
			</li>
			<li className="bg-subtle/[0.05] text-xs font-normal flex flex-col items-center gap-2 text-foreground/70">
				<main>
					<header>Mon</header>
					<footer>11</footer>
				</main>
				<footer>
					<BoltSlash className="size-5 mx-auto" />
				</footer>
			</li>
		</ul>
	);
}

function CalendarNextWeek({ className }: { className?: string }) {
	return (
		<ul
			className={`
				flex items-end justify-around gap-2 text-xs text-foreground/50
				*:rounded-lg *:bg-subtle/[0.05] *:w-full *:px-3 *:py-1
				*:flex *:flex-col *:items-center *:gap-1 ${className}
				`}
		>
			<li>
				<main>Tue 12</main>
				<footer>
					<Bolt className="size-4 mx-auto" strokeWidth="1.5" />
				</footer>
			</li>
			<li>
				<main>Wed 13</main>
				<footer>
					<BoltSlash className="size-4 mx-auto" strokeWidth="1.5" />
				</footer>
			</li>
			<li>
				<main>Thu 14</main>
				<footer>
					<Bolt className="size-4 mx-auto" strokeWidth="1.5" />
				</footer>
			</li>
			<li>
				<main>Fri 15</main>
				<footer>
					<BoltSlash className="size-4 mx-auto" strokeWidth="1.5" />
				</footer>
			</li>
			<li>
				<main>Sat 16</main>
				<footer>
					<BoltSlash className="size-4 mx-auto" strokeWidth="1.5" />
				</footer>
			</li>
		</ul>
	);
}

export function Calendar({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<CalendarHeader />
			<main className="flex-1 leading-[1.2] flex flex-col justify-end gap-2 font-light text-center">
				<CalendarCurrentWeek />
				<CalendarNextWeek />
			</main>
		</article>
	);
}
