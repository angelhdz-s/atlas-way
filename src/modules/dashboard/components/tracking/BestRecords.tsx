import { CardTitle } from "../home/card/CardTitle";

export function BestRecords({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col   dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Best Records" />
			</header>
		</article>
	);
}
