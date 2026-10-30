import Image from 'next/image';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = { src?: string | null | undefined; size?: number };

export function UserAvatar({ src, size = 32 }: Props) {
  return (
    <>
      {!src && <Icon icon="user" className="opacity-50" variant={{ size: 'lg', weight: 'thin' }} />}
      {src && <Image src={src} height={size} width={size} alt="User's avatar" />}
    </>
  );
}
