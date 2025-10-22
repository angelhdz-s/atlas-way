import { CardTitle } from '../../card/components/CardTitle';

function NotificationListItem({
	className = '',
	notification,
	date,
	notseen,
}: {
	className?: string;
	notification: string;
	date: string;
	notseen?: boolean;
}) {
	const notSeenClassName = notseen ? 'font-medium bg-subtle/10 ld-main-fg' : '';
	return (
		<li
			className={`flex items-center justify-between gap-2 py-2 px-3 outline-1 outline-subtle/10 ${notSeenClassName} ${className}`}
		>
			<main>{notification}</main>
			<aside className={`${notseen ? 'text-foreground/80' : 'text-foreground/50'}`}>
				{date}
			</aside>
		</li>
	);
}

function Notifications({ className = '' }: { className?: string }) {
	return (
		<ul className={`font-light flex rounded overflow-hidden flex-col gap-0 ${className}`}>
			<NotificationListItem notification="Don't lose your progress!" date="1 min" notseen />
			<NotificationListItem
				notification="You have reached 120 sessions done"
				date="5 mins"
				notseen
			/>
			<NotificationListItem notification="New follower: Jane Doe" date="10 mins" notseen />
			<NotificationListItem notification="Your routine has been updated" date="30 mins" />
		</ul>
	);
}

export function NotificationsList({ className = '' }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<header>
				<CardTitle title="Notifications" />
			</header>
			<main className="text-sm">
				<Notifications />
			</main>
		</article>
	);
}
