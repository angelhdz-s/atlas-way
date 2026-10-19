import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { ActivitiesToday } from '@/modules/tracking/presentation/ui/components/ActivitiesToday';
import { getTodayTrackingOverview } from '@/modules/tracking/presentation/workout.actions';
import { AllSessionsDoneCounter } from '@/modules/tracking/presentation/ui/components/AllSessionsDoneCounter';
import { BestRecords } from '@/modules/tracking/presentation/ui/components/BestRecords';
import { CurrentGoals } from '@/modules/tracking/presentation/ui/components/CurrentGoals';
import { CurrentMonthSessionsCounter } from '@/modules/tracking/presentation/ui/components/CurrentMonthSessionsCounter';
import { CurrentWeekStatus } from '@/modules/tracking/presentation/ui/components/CurrentWeekStatus';
import { NextSession } from '@/modules/tracking/presentation/ui/components/NextSession';
import { SessionsChart } from '@/modules/tracking/presentation/ui/components/SessionsChart';
import { SessionsHistory } from '@/modules/tracking/presentation/ui/components/SessionsHistory';
import { SessionStreak } from '@/modules/tracking/presentation/ui/components/SessionStreak';

export default async function SessionsPage() {
  const overviewResult = await getTodayTrackingOverview();
  const overview = overviewResult.success
    ? overviewResult.data
    : {
        hasActiveRoutine: false,
        routineName: null,
        dayNumber: null,
        isRestDay: false,
        session: null,
        workout: null,
      };

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
        <ActivitiesToday overview={overview} />
        <SessionsHistory className="col-span-2" />
        <NextSession />
        <BestRecords />
        <CurrentGoals />
        <SessionsChart />
      </PageContent>
    </PageContainer>
  );
}
