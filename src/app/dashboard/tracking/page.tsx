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
			<PageHeader
				title="Tracking"
				className="flex items-center justify-between"
			>
				<button className="rounded bg-primary px-4 py-2 cursor-pointer ld-main-fg hover:text-current/50">
					<span className="font-normal">New Session Done</span>
				</button>
			</PageHeader>
			<PageContent className="grid grid-cols-3 gap-4">
				<SessionStreak />
				<CurrentMonthSessionsCounter />
				<AllSessionsDoneCounter />
				<ActivitiesToday />
				<SessionsHistory className="col-span-2" />
				<SessionsChart />
				<BestRecords />
				<CurrentGoals />
				<NextSession />
				<CurrentWeekStatus />
			</PageContent>
		</PageContainer>
	);
}
