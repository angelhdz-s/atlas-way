import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { ActivitiesToday } from "@/modules/dashboard/components/tracking/ActivitiesToday";
import { AllSessionsDoneCounter } from "@/modules/dashboard/components/tracking/AllSessionsDoneCounter";
import { BestRecords } from "@/modules/dashboard/components/tracking/BestRecords";
import { CurrentGoals } from "@/modules/dashboard/components/tracking/CurrentGoals";
import { CurrentMonthSessionsCounter } from "@/modules/dashboard/components/tracking/CurrentMonthSessionsCounter";
import { CurrentWeekStatus } from "@/modules/dashboard/components/tracking/CurrentWeekStatus";
import { NextSession } from "@/modules/dashboard/components/tracking/NextSession";
import { SessionsChart } from "@/modules/dashboard/components/tracking/SessionsChart";
import { SessionsHistory } from "@/modules/dashboard/components/tracking/SessionsHistory";
import { SessionStreak } from "@/modules/dashboard/components/tracking/SessionStreak";

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader title="Tracking" />
			<PageContent className="grid grid-cols-3 gap-4">
				<CurrentWeekStatus />
				<section className="grid grid-cols-3 gap-2 col-span-2">
					<SessionStreak />
					<CurrentMonthSessionsCounter />
					<AllSessionsDoneCounter />
				</section>
				<ActivitiesToday />
				<SessionsHistory className="col-span-2" />
				<SessionsChart />
				<BestRecords />
				<CurrentGoals />
				<NextSession />
			</PageContent>
		</PageContainer>
	);
}
