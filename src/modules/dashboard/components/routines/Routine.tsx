import { CalendarDays, Circle } from "@/modules/globals/components/Icons";

const DAY_TYPES = {
	canceled: {
		class:
			"border-red-600 text-red-600 light:bg-red-300 light:text-red-700 light:border-red-700",
		title: "Canceled",
	},
	completed: {
		class:
			"border-green-600 text-green-600 light:bg-green-300 light:text-green-700 light:border-green-700",
		title: "Completed",
	},
	current: {
		class:
			"bg-green-800 border-green-600 text-main-foreground light:bg-green-600 light:border-green-800",
		title: "Current Day",
	},
	next: {
		class: "border-subtle/50 ld-main-fg",
		title: "Next Day",
	},
	rest: {
		class: "border-foreground/10 text-subtle light:text-subtle/70",
		title: "Rest Day",
	},
};

type DayType = keyof typeof DAY_TYPES;

function ListDayItem({ name, type }: { name: string; type: DayType }) {
	return (
		<li
			className={`rounded w-16 h-8 flex items-center justify-center text-center border-1 ${DAY_TYPES[type].class}`}
			title={DAY_TYPES[type].title}
		>
			{name}
		</li>
	);
}

interface RoutineState {
	name: string;
	active: boolean;
	exercisesCount: number;
	days: { name: string; completed: boolean; date: Date }[];
}

export function Routine({ className = "" }: { className?: string }) {
	// const { name, active, exercisesCount, days } = data;
	return (
		<article
			className={`p-8 bg-background light:bg-light-sec-background border-1 border-foreground/10 shadow-xl shadow-black/[0.05] flex flex-col gap-4 w-90 rounded-xl tracking-tight ${className}`}
		>
			<header>
				<main className="flex gap-4 text-4xl font-funnel-display font-light ld-main-fg">
					<h2 className="whitespace-nowrap text-ellipsis overflow-hidden tracking-tighter">
						Routine Name
					</h2>
					<span className="block aspect-square size-4 my-auto rounded-full bg-primary"></span>
				</main>
				<footer className="text-lg font-light">
					<ul className="flex gap-4">
						<li>1 day ago</li>
						<li className="flex items-center">
							<span className="block w-[1px] h-4 bg-subtle/50"></span>
						</li>
						<li>16 exercises</li>
					</ul>
				</footer>
			</header>
			<main className="flex flex-col gap-4">
				<ul className="flex gap-2 items-center flex-wrap">
					<ListDayItem name="Mon" type="completed" />
					<ListDayItem name="Tue" type="canceled" />
					<ListDayItem name="Wed" type="current" />
					<ListDayItem name="Thu" type="next" />
					<ListDayItem name="Fri" type="next" />
					<ListDayItem name="Sat" type="rest" />
					<ListDayItem name="Sun" type="rest" />
				</ul>
			</main>
			<div className="flex items-center justify-center">
				<div className="relative text-center leading-[1] size-24 grid place-content-center">
					<header className="text-subtle light:text-subtle/60">days</header>
					<main className="text-2xl ld-main-fg font-funnel-display">2/5</main>
					<div className="absolute left-[50%] top-[50%] translate-[-50%] rounded-full text-primary">
						<Circle
							className="size-26 -rotate-90"
							strokeWidth="1"
							porcentage={40}
						/>
					</div>
					<div className="absolute left-[50%] top-[50%] translate-[-50%] size-20 rounded-full border-2 border-foreground/10"></div>
				</div>
				<div className="relative text-center leading-[1] size-24 grid place-content-center">
					<header className="text-subtle light:text-subtle/60">AVG</header>
					<main className="text-2xl ld-main-fg font-funnel-display">75%</main>
					<div className="absolute left-[50%] top-[50%] translate-[-50%] rounded-full text-primary">
						<Circle
							className="size-26 -rotate-90"
							strokeWidth="1"
							porcentage={75}
						/>
					</div>
					<div className="absolute left-[50%] top-[50%] translate-[-50%] size-20 rounded-full border-2 border-foreground/10"></div>
				</div>
			</div>
			<footer className="flex items-center gap-2 text-sm">
				<button
					type="button"
					className="flex items-center gap-1 btn-md btn-primary ml-auto"
				>
					<CalendarDays className="size-6" strokeWidth="1.5" />
					Edit
				</button>
			</footer>
		</article>
	);
}
