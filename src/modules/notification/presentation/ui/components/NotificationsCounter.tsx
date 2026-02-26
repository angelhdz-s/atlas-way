export function NotificationsCounter({ count }: { count: number }) {
	return (
		<div className="size-6 rounded-full grid place-items-center bg-blue-800 border border-blue-600 fg-white">
			<span className="block w-fit text-sm font-medium">{count}</span>
		</div>
	);
}
