import { Bell, DefaultIcon } from '@/presentation/globals/components/Icons';

export function NotificationsButton({ className = '' }: { className?: string }) {
	return (
		<button type="button" className={`cursor-pointer ${className}`}>
			<DefaultIcon Icon={Bell} />
		</button>
	);
}
