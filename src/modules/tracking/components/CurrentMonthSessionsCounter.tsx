import { MONTH_NAMES } from "@/modules/globals/constants/date";
import { SESSIONS_COUNTERS, TODAY } from "@/modules/globals/mocks/tracking";
import { CardTitle } from "@/modules/dashboard/card/components/CardTitle";
import { Counter, CounterIcon } from "./Counter";
import { CalendarWeek } from "@/modules/globals/components/Icons";

export function CurrentMonthSessionsCounter({
	className,
}: {
	className?: string;
}) {
	const { currentMonth } = SESSIONS_COUNTERS;
	const monthName = MONTH_NAMES[TODAY.getMonth()].name;

	return (
		<article
			className={`flex flex-col gap-1 font-light dashboard-card-default ${className}`}
		>
			<header>
				<CardTitle title={`${monthName}'s Reached Sessions`} />
			</header>
			<main className="flex-1 flex items-center gap-1">
				<CounterIcon icon={CalendarWeek} />
				<Counter number={currentMonth} />
			</main>
		</article>
	);
}
