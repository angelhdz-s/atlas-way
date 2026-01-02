import { BestExercises } from '@/presentation/modules/dashboard/home/components/BestExercises';
import { Calendar } from '@/presentation/modules/dashboard/home/components/Calendar';
import { ExercisesList } from '@/presentation/modules/dashboard/home/components/ExercisesList';
import { FirstRoutine } from '@/presentation/modules/dashboard/home/components/FirstRoutine';
import { FirstSession } from '@/presentation/modules/dashboard/home/components/FirstSession';
import { LastSession } from '@/presentation/modules/dashboard/home/components/LastSession';
import { MainCard } from '@/presentation/modules/dashboard/home/components/MainCard';
import { MusclesList } from '@/presentation/modules/dashboard/home/components/MusclesList';
import { NextSession } from '@/modules/tracking/components/NextSession';
import { NotificationsList } from '@/presentation/modules/dashboard/home/components/NotificationsList';
import { RoutinesList } from '@/presentation/modules/dashboard/home/components/RoutinesList';
import { SessionStreak } from '@/modules/tracking/components/SessionStreak';
import { TotalSessionsDone } from '@/presentation/modules/dashboard/home/components/TotalSessionsDone';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader title="Dashboard" description="Your personal fitness dashboard" />
			<PageContent className="grid grid-cols-12 gap-4">
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
