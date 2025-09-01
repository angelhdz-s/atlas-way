import { SESSIONS_COUNTERS } from "@/mocks/tracking";
import { CardTitle } from "../home/card/CardTitle";
import { Counter } from "./Counter";

export function SessionStreak({ className = "" }: { className?: string }) {
	const { sessionStreak } = SESSIONS_COUNTERS;

	return (
		<article
			className={`flex flex-col gap-0 dashboard-card-default ${className}`}
		>
			<CardTitle title="Session Streak" className="text-left" />
			<main>
				<Counter number={sessionStreak} />
			</main>
		</article>
	);
}
