import { CardTitle } from '../../card/components/CardTitle';

export function TotalSessionsDone({ className = '' }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-0 dashboard-card-default ${className}`}>
			<CardTitle title="Total Sessions Done" className="text-center" />
			<main className="flex-1 flex flex-col items-center justify-center gap-0">
				<span className="tracking-tighter text-8xl font-medium font-funnel-display fg-accent">
					120
				</span>
				<span className="leading-none text-base font-light text-default/50">Sessions</span>
			</main>
		</article>
	);
}
