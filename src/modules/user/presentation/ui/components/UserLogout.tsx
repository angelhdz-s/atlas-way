import { Session, User } from 'next-auth';
import { UserAvatar } from './UserAvatar';

export function UserLogout({ src, children }: { src?: string | null; children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-1 border border-subtle/50 rounded-full px-[2px]">
			<picture className="size-8 aspect-square rounded-full overflow-hidden bg-subtle/50 grid place-items-center">
				<UserAvatar src={src} />
			</picture>
			<aside>{children}</aside>
		</div>
	);
}
