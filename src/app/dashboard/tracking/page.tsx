"use client";

import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Calendar } from "@/modules/dashboard/components/tracking/calendar/Calendar";
import { CalendarProvider } from "@/modules/dashboard/components/tracking/calendar/CalendarProvider";
import { SessionsDetails } from "@/modules/dashboard/components/tracking/SessionsDetails";

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Tracking"
				className="flex items-center justify-between"
			>
				<button type="button" className="btn-primary btn-md">
					Create Routine
				</button>
			</PageHeader>
			<PageContent>
				<CalendarProvider>
					<main className="flex items-center gap-8">
						<Calendar />
						<SessionsDetails />
					</main>
				</CalendarProvider>
			</PageContent>
		</PageContainer>
	);
}
