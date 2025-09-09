import { CardTitle } from "../../dashboard/card/components/CardTitle";
import { LineChart } from "../../statistics/components/Charts";

export function SessionsChart({ className }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 dashboard-card-default ${className}`}
		>
			<header>
				<CardTitle title="Average of Sessions Completed" />
			</header>
			<main className="grid grid-cols-[auto_1fr] items-center justify-center gap-1 w-fit mx-auto">
				<span>%</span>
				<LineChart
					height={200}
					width={400}
					data={[
						{ x: 0, y: 3 },
						{ x: 1, y: 4 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 6 },
					]}
				/>
				<span></span>
				<span className="text-center">Months</span>
			</main>
		</article>
	);
}
