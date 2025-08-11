import { CardTitle } from "./card/CardTitle";

export function SessionStreak({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-0 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2 ${className}`}
		>
			<CardTitle title="Session Streak" className="text-center" />
			<main className="flex-1 flex flex-col items-center justify-center gap-0">
				<span className="leading-[1] tracking-tighter text-9xl font-medium font-funnel-display text-accent">
					7
				</span>
				<span className="leading-[1] text-base font-light text-foreground/50">
					Days
				</span>
			</main>
		</article>
	);
}
