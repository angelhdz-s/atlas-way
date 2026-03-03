import { LogOutButton } from '@/modules/auth/presentation/ui/components/LogOutButton';
import { UserAvatar } from './UserAvatar';

export function UserLogout({
  src,
}: {
  src?: string | null;
}) {
  return (
    <div className="flex items-center gap-4">
      <picture className="bg-subtle/50 grid aspect-square size-8 place-items-center overflow-hidden rounded-full">
        <UserAvatar src={src} />
      </picture>
      <LogOutButton />
    </div>
  );
}
