import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import {
	BarCharts,
	LineChart,
} from "@/modules/dashboard/components/statistics/Charts";

export default function StatisticsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Your Statistics"
				className="flex items-center justify-between"
			/>
			<PageContent className="">
				<LineChart width={800} height={400} />
				<BarCharts width={800} height={400} />
			</PageContent>
		</PageContainer>
	);
}
