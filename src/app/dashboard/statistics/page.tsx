import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function StatisticsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Your Statistics"
				className="flex items-center justify-between"
			/>
			<PageContent className="grid grid-cols-2 gap-4 w-fit">
				Statistics Here
			</PageContent>
		</PageContainer>
	);
}
