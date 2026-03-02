import { UserAvatar } from './UserAvatar';

export function UserLogout({
  src,
  children,
}: {
  src?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="border-subtle/50 flex items-center gap-1 rounded-full border px-[2px]">
      <picture className="bg-subtle/50 grid aspect-square size-8 place-items-center overflow-hidden rounded-full">
        <UserAvatar src={src} />
      </picture>
      <aside>{children}</aside>
    </div>
  );
}
