import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import MusclesTable from '@/modules/muscle/presentation/ui/components/MusclesTable';
import { MuscularGroupsTable } from '@/modules/muscle/presentation/ui/components/MuscularGroupsTable';

export default function MuscularGroupsPage() {
	return (
		<PageContainer>
			<PageHeader title="Muscles" />
			<PageContent className="flex flex-col gap-8">
				<section className="flex flex-wrap gap-4">
					<MusclesTable />
				</section>
				<section>
					<MuscularGroupsTable />
				</section>
			</PageContent>
		</PageContainer>
	);
}
