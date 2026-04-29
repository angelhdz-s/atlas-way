import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { Session } from '@/modules/session/presentation/ui/components/Session';
import { IconPlus } from '@/presentation/globals/components/icons/outline/IconPlus';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllSessions } from '@/modules/session/presentation/session.actions';

export default async function SessionsPage() {
  const sessionsResult = await getAllSessions();
  const sessions = sessionsResult.success ? sessionsResult.data : [];
  return (
    <PageContainer>
      <PageHeader title="Sessions" description="Manage your days planifications" className="">
        <Link
          variant={{ color: 'primary', type: 'iconText' }}
          Icon={IconPlus}
          href="/dashboard/sessions/create"
        >
          Add Session
        </Link>
      </PageHeader>
      <PageContent className="flex w-fit flex-wrap gap-4">
        {sessions.map((session) => (
          <Session key={session.id} session={session} />
        ))}
      </PageContent>
    </PageContainer>
  );
}
