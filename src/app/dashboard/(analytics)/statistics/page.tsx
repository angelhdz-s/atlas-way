import { PageContainer } from '@/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/modules/dashboard/page/components/PageHeader';
import { BarCharts, LineChart } from '@/modules/statistics/components/Charts';
import { StatisticCircle } from '@/modules/statistics/components/StatisticCircle';

export default function StatisticsPage() {
	return (
		<PageContainer>
			<PageHeader title="Your Statistics" className="flex items-center justify-between" />
			<PageContent className="">
				<LineChart width={800} height={400} />
				<BarCharts width={800} height={400} />
				<StatisticCircle porcentage={90} title="Hola" value="65" />
			</PageContent>
		</PageContainer>
	);
}
