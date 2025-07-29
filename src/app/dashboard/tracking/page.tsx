import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { TrackingDay } from "@/modules/dashboard/components/TrackingDay";

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
			<PageContent className="grid grid-cols-7 rounded overflow-hidden border-2 border-zinc-900">
				{[...Array(21)].map((_, index) => {
					return <TrackingDay key={index} title={`Day ${index + 1}, July`} />;
				})}
			</PageContent>
		</PageContainer>
	);
}
