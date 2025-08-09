import { BestExercises } from "@/modules/dashboard/components/home/BestExercises";
import { Calendar } from "@/modules/dashboard/components/home/Calendar";
import { ExercisesList } from "@/modules/dashboard/components/home/ExercisesList";
import { FirstRoutine } from "@/modules/dashboard/components/home/FirstRoutine";
import { FirstSession } from "@/modules/dashboard/components/home/FirstSession";
import { LastSession } from "@/modules/dashboard/components/home/LastSession";
import { MainCard } from "@/modules/dashboard/components/home/MainCard";
import { MusclesList } from "@/modules/dashboard/components/home/MusclesList";
import { NextSession } from "@/modules/dashboard/components/home/NextSession";
import { NotificationsList } from "@/modules/dashboard/components/home/NotificationsList";
import { RoutinesList } from "@/modules/dashboard/components/home/RoutinesList";
import { SessionStreak } from "@/modules/dashboard/components/home/SessionStreak";
import { TotalSessionsDone } from "@/modules/dashboard/components/home/TotalSessionsDone";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader
				title="Welcome to Atlas"
				description="Your personal fitness dashboard"
			/>
			<PageContent className="grid grid-cols-12 gap-4 *:rounded-3xl">
				<MainCard className="col-span-4" />

				<FirstRoutine className="col-span-3" />

				<FirstSession className="col-span-3" />

				<ExercisesList />

				<LastSession />

				<NextSession />

				<SessionStreak />

				<RoutinesList />

				<MusclesList />

				<TotalSessionsDone />

				<Calendar />

				<NotificationsList />

				<BestExercises />
			</PageContent>
		</PageContainer>
	);
}
