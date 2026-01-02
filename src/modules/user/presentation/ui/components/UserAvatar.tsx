import { UserIcon } from '@/presentation/globals/components/Icons';
import Image from 'next/image';

export function UserAvatar({ src, size = 32 }: { src?: string | null; size?: number }) {
	return (
		<>
			{!src && <UserIcon className="opacity-50" strokeWidth="1" />}
			{src && <Image src={src} height={size} width={size} alt="User's avatar" />}
		</>
	);
}
