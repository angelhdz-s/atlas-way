import { getCurrentSession } from '@/shared/infrastructure/next-auth/next-auth.currentsession';
import { UserAvatar } from '@/modules/user/presentation/ui/components/UserAvatar';

export async function UserInfo({ className = '' }: { className?: string }) {
  const session = await getCurrentSession();
  const user = session?.user;

  if (!user) return null;

  return (
    <div className={`flex h-full items-center gap-2 lg:flex-row ${className}`}>
      <main className={`flex items-center gap-3`}>
        <figure className="grid size-9 place-items-center overflow-hidden rounded-full bg-blue-600">
          <UserAvatar src={user?.image} size={36} />
        </figure>
        <header className={`hidden leading-normal lg:block`}>
          <h4 className="text-strong h-5 text-left text-base font-normal">{user.name}</h4>
          <p className="overflow-y-clip text-sm font-light">{user.email}</p>
        </header>
      </main>
    </div>
  );
}
