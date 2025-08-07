import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import MusclesTable from "@/modules/dashboard/components/routines/MusclesTable";
import { MuscularGroupsTable } from "@/modules/dashboard/components/routines/MuscularGroupsTable";

export default function MuscularGroupsPage() {
	return (
		<PageContainer>
			<PageHeader title="Muscles and Muscular Groups" />
			<PageContent className="flex flex-col gap-8">
				<section>
					<MusclesTable />
				</section>
				<section>
					<MuscularGroupsTable />
				</section>
			</PageContent>
		</PageContainer>
	);
}
