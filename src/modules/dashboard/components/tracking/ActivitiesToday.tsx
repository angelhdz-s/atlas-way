import { CardTitle } from "../home/card/CardTitle";

export function ActivitiesToday({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Today's Challenges" />
			</header>
		</article>
	);
}
