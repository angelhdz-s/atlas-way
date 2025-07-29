import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function SessionsStatisticsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Sessions Statistics"
				className="flex items-center justify-between"
			/>
			<PageContent>
				<div>Statistics 1</div>
				<div>Statistics 2</div>
				<div>Statistics 3</div>
				<div>Statistics 4</div>
			</PageContent>
		</PageContainer>
	);
}
