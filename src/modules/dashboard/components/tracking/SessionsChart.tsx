import { CardTitle } from "../home/card/CardTitle";

export function SessionsChart({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Average of Sessions Completed" />
			</header>
		</article>
	);
}
