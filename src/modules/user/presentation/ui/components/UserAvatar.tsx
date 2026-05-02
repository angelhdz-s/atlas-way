import Image from 'next/image';
import { IconUser } from '@/presentation/globals/components/icons/outline/IconUser';

type Props = { src?: string | null | undefined; size?: number };

export function UserAvatar({ src, size = 32 }: Props) {
  return (
    <>
      {!src && <IconUser className="opacity-50" strokeWidth="1" />}
      {src && <Image src={src} height={size} width={size} alt="User's avatar" />}
    </>
  );
}
