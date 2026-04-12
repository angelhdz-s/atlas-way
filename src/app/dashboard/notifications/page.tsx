import { NOTIFICATIONS } from '@/presentation/globals/mocks/notifications';
import { Notification } from '@/modules/notification/presentation/ui/components/Notification';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';

export default function Dashboard() {
  return (
    <PageContainer>
      <PageHeader title="Notifications" />
      <PageContent className="space-y-1">
        {NOTIFICATIONS.map((notification, index) => (
          <Notification key={index} data={notification} />
        ))}
      </PageContent>
    </PageContainer>
  );
}
