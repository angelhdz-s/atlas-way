import { SESSIONS } from '@/presentation/globals/mocks/sessions';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { Session } from '@/modules/session/presentation/ui/components/Session';
import { IconClipboardList } from '@/presentation/globals/components/Icons';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

export default function SessionsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Sessions"
        description="Manage your days planifications"
        className=""
      >
        <VariantLink
          variantConfig={{ color: 'simple' }}
          href="/dashboard/sessions/create"
        >
          <IconClipboardList
            className="size-5"
            strokeWidth="2"
          />
          Create Session
        </VariantLink>
      </PageHeader>
      <PageContent className="flex w-fit flex-wrap gap-4">
        {SESSIONS.map((session) => (
          <Session key={session.name} data={session} />
        ))}
      </PageContent>
    </PageContainer>
  );
}
