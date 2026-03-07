import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { ActivitiesToday } from '@/modules/tracking/components/ActivitiesToday';
import { AllSessionsDoneCounter } from '@/modules/tracking/components/AllSessionsDoneCounter';
import { BestRecords } from '@/modules/tracking/components/BestRecords';
import { CurrentGoals } from '@/modules/tracking/components/CurrentGoals';
import { CurrentMonthSessionsCounter } from '@/modules/tracking/components/CurrentMonthSessionsCounter';
import { CurrentWeekStatus } from '@/modules/tracking/components/CurrentWeekStatus';
import { NextSession } from '@/modules/tracking/components/NextSession';
import { SessionsChart } from '@/modules/tracking/components/SessionsChart';
import { SessionsHistory } from '@/modules/tracking/components/SessionsHistory';
import { SessionStreak } from '@/modules/tracking/components/SessionStreak';

export default function SessionsPage() {
  return (
    <PageContainer>
      <PageHeader title="Tracking" />
      <PageContent className="grid grid-cols-3 gap-6">
        <CurrentWeekStatus />
        <section className="col-span-2 grid grid-cols-3 gap-6">
          <SessionStreak />
          <CurrentMonthSessionsCounter />
          <AllSessionsDoneCounter />
        </section>
        <ActivitiesToday />
        <SessionsHistory className="col-span-2" />
        <NextSession />
        <BestRecords />
        <CurrentGoals />
        <SessionsChart />
      </PageContent>
    </PageContainer>
  );
}
