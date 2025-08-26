"use client";

import { LastSession } from "@/modules/dashboard/components/home/LastSession";
import { NextSession } from "@/modules/dashboard/components/home/NextSession";
import { SessionStreak } from "@/modules/dashboard/components/home/SessionStreak";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Calendar } from "@/modules/dashboard/components/tracking/calendar/Calendar";
import { CalendarProvider } from "@/modules/dashboard/components/tracking/calendar/CalendarProvider";
import { DateSelector } from "@/modules/dashboard/components/tracking/calendar/DateSelector";
import { SessionsDetails } from "@/modules/dashboard/components/tracking/SessionsDetails";

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Tracking"
				className="flex items-center justify-between"
			></PageHeader>
			<CalendarProvider>
				<PageContent className="grid grid-cols-4 gap-4 *:rounded-3xl">
					<DateSelector />
					<Calendar />
					<SessionsDetails className="col-span-2" />
					<LastSession className="!col-span-1" />
					<NextSession className="!col-span-1" />
					<SessionStreak className="!col-span-1" />
				</PageContent>
			</CalendarProvider>
		</PageContainer>
	);
}
