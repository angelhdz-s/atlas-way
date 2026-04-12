import { UserLogout } from '@/modules/user/presentation/ui/components/UserLogout';
import { getCurrentSession } from '@/shared/infrastructure/next-auth/next-auth.currentsession';
import { LogInButton } from '@/modules/auth/presentation/ui/components/LogInButton';

export async function SessionButtons({ className = '' }: { className?: string }) {
  const session = await getCurrentSession();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {!session?.user && <LogInButton />}
      {session?.user && <UserLogout src={session.user.image} />}
    </div>
  );
}
