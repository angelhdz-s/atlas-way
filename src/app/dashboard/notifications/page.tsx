import { NOTIFICATIONS } from '@/modules/globals/mocks/notifications';
import { Notification } from '@/modules/notification/presentation/ui/components/Notification';
import { PageContainer } from '@/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/modules/dashboard/page/components/PageHeader';

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader title="Notifications" />
			<PageContent className="flex flex-col gap-1">
				{NOTIFICATIONS.map((notification, index) => (
					<Notification key={index} data={notification} />
				))}
			</PageContent>
		</PageContainer>
	);
}
