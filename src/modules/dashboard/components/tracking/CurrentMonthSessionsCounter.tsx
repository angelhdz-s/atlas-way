import { MONTH_NAMES } from "@/constants/date";
import { SESSIONS_COUNTERS, TODAY } from "@/mocks/tracking";
import { CardTitle } from "@/modules/dashboard/components/home/card/CardTitle";
import { Counter } from "./Counter";

export function CurrentMonthSessionsCounter({
	className,
}: {
	className?: string;
}) {
	const { currentMonth } = SESSIONS_COUNTERS;
	const monthName = MONTH_NAMES[TODAY.getMonth()].name;

	return (
		<article
			className={`flex flex-col font-light dashboard-card-default ${className}`}
		>
			<header>
				<CardTitle title={`${monthName}'s Reached Sessions`} />
			</header>
			<main>
				<Counter number={currentMonth} />
			</main>
			<footer></footer>
		</article>
	);
}
