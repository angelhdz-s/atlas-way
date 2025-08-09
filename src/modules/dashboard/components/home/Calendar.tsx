import { CardTitle } from "./card/CardTitle";

export function Calendar({ className = "" }: { className?: string }) {
	return (
		<article
			className={`col-span-4 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 ${className}`}
		>
			<CardTitle title="Calendar" />
		</article>
	);
}
