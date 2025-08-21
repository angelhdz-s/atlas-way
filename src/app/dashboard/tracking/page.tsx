import { getTrackingDates } from "@/lib/dates";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { TrackingDay } from "@/modules/dashboard/components/TrackingDay";
import { Calendar } from "@/modules/dashboard/components/tracking/Calendar";

const dates = getTrackingDates();

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
				<header className="mb-8">
					<Calendar />
				</header>
				<main className="hidden grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
					{dates.map((date) => {
						return <TrackingDay key={date.toISOString()} date={date} />;
					})}
				</main>
			</PageContent>
		</PageContainer>
	);
}
