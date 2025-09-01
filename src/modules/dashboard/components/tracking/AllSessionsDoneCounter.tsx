import { SESSIONS_COUNTERS } from "@/mocks/tracking";
import { CardTitle } from "../home/card/CardTitle";
import { Counter } from "./Counter";

export function AllSessionsDoneCounter({ className }: { className?: string }) {
	const { totalSessions } = SESSIONS_COUNTERS;
	return (
		<article className={`flex flex-col dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Total Sessions" />
			</header>
			<main>
				<Counter number={totalSessions} />
			</main>
		</article>
	);
}
