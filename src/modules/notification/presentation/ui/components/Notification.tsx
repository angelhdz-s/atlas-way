import Link from 'next/link';
import { NotificationType } from '@/presentation/globals/mocks/notifications';
import { Trash } from '@/presentation/globals/components/Icons';

export function Notification({
	className = '',
	data,
}: {
	className?: string;
	data: NotificationType;
}) {
	const { title, description, date, notSeen, url } = data;

	const notificationClass = notSeen ? 'bg-middle' : '';

	return (
		<article
			className={`cursor-pointer px-4 py-1 border border-bd-default hover:border-bd-strong rounded ${notificationClass} ${className}`}
		>
			<Link href={url || '/dashboard/notifications'} className="flex items-center gap-4">
				<div className="grid place-content-center my-auto">
					<input type="checkbox" className="size-5" />
				</div>
				<main className="flex-1 flex flex-col gap-0">
					<header className="flex items-center gap-4">
						<h3 className={`text-base ${notSeen ? 'fg-strong font-bold' : ''}`}>
							{title}
						</h3>
						{notSeen && (
							<span className="block size-2.5 rounded-full bg-blue-500"></span>
						)}
					</header>
					<footer>
						<p className={`text-sm ${notSeen ? '' : 'text-default/60'}`}>
							{description}
						</p>
					</footer>
				</main>
				<aside className="w-12 text-center text-default/50 text-sm">{date}</aside>
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="bg-front text-sm text-red-800/80 cursor-pointer p-2 rounded"
					>
						<Trash className="size-4" strokeWidth="2" />
					</button>
				</div>
			</Link>
		</article>
	);
}
