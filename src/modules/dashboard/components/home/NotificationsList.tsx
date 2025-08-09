import { CardTitle } from "./card/CardTitle";

export function NotificationsList({ className = "" }: { className?: string }) {
	return (
		<article
			className={`flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-3 ${className}`}
		>
			<CardTitle title="Notifications" />
		</article>
	);
}
