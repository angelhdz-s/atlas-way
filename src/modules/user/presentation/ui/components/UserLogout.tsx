import { LogOutButton } from '@/modules/auth/presentation/ui/components/LogOutButton';
import { UserAvatar } from './UserAvatar';

type Props = { src?: string | null | undefined };

export function UserLogout({ src }: Props) {
  return (
    <div className="flex items-center gap-4">
      <picture className="grid aspect-square size-8 place-items-center overflow-hidden rounded-full">
        <UserAvatar src={src} />
      </picture>
      <LogOutButton />
    </div>
  );
}
