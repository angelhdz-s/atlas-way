import { CardTitle } from "../home/card/CardTitle";

export function SessionsHistory({ className }: { className?: string }) {
	return (
		<article className={`flex flex-col   dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Session History" />
			</header>
		</article>
	);
}
