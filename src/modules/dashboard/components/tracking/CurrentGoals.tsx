import { CardTitle } from "../home/card/CardTitle";

export function CurrentGoals({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Goals" />
			</header>
		</article>
	);
}
