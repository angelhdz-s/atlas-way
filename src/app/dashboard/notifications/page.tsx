import { NOTIFICATIONS } from "@/mocks/notifications";
import { Notification } from "@/modules/dashboard/components/Notification";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

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
