import { BestExercises } from '@/presentation/modules/dashboard/components/home/BestExercises';
import { Calendar } from '@/presentation/modules/dashboard/components/home/Calendar';
import { ExercisesList } from '@/presentation/modules/dashboard/components/home/ExercisesList';
import { FirstRoutine } from '@/presentation/modules/dashboard/components/home/FirstRoutine';
import { FirstSession } from '@/presentation/modules/dashboard/components/home/FirstSession';
import { LastSession } from '@/presentation/modules/dashboard/components/home/LastSession';
import { MainCard } from '@/presentation/modules/dashboard/components/home/MainCard';
import { MusclesList } from '@/presentation/modules/dashboard/components/home/MusclesList';
import { NextSession } from '@/modules/tracking/presentation/ui/components/NextSession';
import { NotificationsList } from '@/presentation/modules/dashboard/components/home/NotificationsList';
import { RoutinesList } from '@/presentation/modules/dashboard/components/home/RoutinesList';
import { SessionStreak } from '@/modules/tracking/presentation/ui/components/SessionStreak';
import { TotalSessionsDone } from '@/presentation/modules/dashboard/components/home/TotalSessionsDone';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';

export default function Dashboard() {
  return (
    <PageContainer>
      <PageHeader title="Dashboard" description="Your personal fitness dashboard" />
      <PageContent className="grid grid-cols-12 gap-6">
        <MainCard className="col-span-4" />

        <FirstRoutine className="col-span-3" />

        <FirstSession className="col-span-3" />

        <ExercisesList className="col-span-2" />

        <LastSession className="col-span-3" />

        <NextSession className="col-span-3" />

        <SessionStreak className="col-span-2" />

        <RoutinesList className="col-span-2" />

        <MusclesList className="col-span-2" />

        <TotalSessionsDone className="col-span-2" />

        <Calendar className="col-span-4" />

        <NotificationsList className="col-span-3" />

        <BestExercises className="col-span-3" />
      </PageContent>
    </PageContainer>
  );
}
