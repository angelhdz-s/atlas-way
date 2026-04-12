import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';

export default function RoutinesStatisticsPage() {
  return (
    <PageContainer>
      <PageHeader title="Routines Statistics" className="flex items-center justify-between" />
      <PageContent>
        <div>Statistics 1</div>
        <div>Statistics 2</div>
        <div>Statistics 3</div>
        <div>Statistics 4</div>
      </PageContent>
    </PageContainer>
  );
}
