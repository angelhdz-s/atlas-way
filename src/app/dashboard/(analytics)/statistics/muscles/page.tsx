import { PageContainer } from "@/modules/dashboard/page/components/PageContainer";
import { PageContent } from "@/modules/dashboard/page/components/PageContent";
import { PageHeader } from "@/modules/dashboard/page/components/PageHeader";

export default function MusclesStatisticsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Muscles Statistics"
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
