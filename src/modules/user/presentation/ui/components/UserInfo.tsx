import { getCurrentSession } from '@/shared/infrastructure/nextauth/next-auth.currentsession';
import { IconDots } from '@/presentation/globals/components/Icons';
import { UserAvatar } from './UserAvatar';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

export async function UserInfo({
  className = '',
}: {
  className?: string;
}) {
  const session = await getCurrentSession();
  const user = session?.user;

  return (
    <footer
      className={`flex h-full items-center gap-2 ${className}`}
    >
      <main className={`flex items-center gap-3`}>
        <figure className="grid size-9 place-items-center overflow-hidden rounded-full bg-blue-600">
          <UserAvatar src={user?.image} size={36} />
        </figure>
        <header className={`leading-none`}>
          <h4 className="fg-strong -mb-1 h-5 overflow-hidden text-left text-sm font-normal text-ellipsis whitespace-nowrap">
            {user?.name || 'Unknown User'}
          </h4>
          <p className="overflow-hidden overflow-y-clip text-sm font-light text-ellipsis whitespace-nowrap">
            {user?.email || 'useremail@example.com'}
          </p>
        </header>
      </main>
      <VariantButton color="simple" type="square">
        <IconDots className="size-6" />
      </VariantButton>
    </footer>
  );
}
