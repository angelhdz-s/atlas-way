import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { Session } from '@/modules/session/presentation/ui/components/Session';
import { IconPlus } from '@/presentation/globals/components/Icons';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllSessions } from '@/modules/session/presentation/session.actions';

export default async function SessionsPage() {
  const sessionsResult = await getAllSessions();
  const sessions = sessionsResult.success ? sessionsResult.data : [];
  return (
    <PageContainer>
      <PageHeader title="Sessions" description="Manage your days planifications" className="">
        <Link
          variantConfig={{ color: 'primary' }}
          href="/dashboard/sessions/create"
          className="gap-1 pl-3"
        >
          <IconPlus className="size-5" strokeWidth="2" />
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
