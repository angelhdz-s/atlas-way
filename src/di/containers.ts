import { AuthContainer } from '@/modules/auth/container/auth.container';
import { BodySectionContainer } from '@/modules/bodysection/container/bodysection.container';
import { ExerciseContainer } from '@/modules/exercise/container/exercise.container';
import { ExerciseInitialStatsContainer } from '@/modules/exerciseinitialstats/container/exerciseinitialstats.container';
import { MuscleContainer } from '@/modules/muscle/container/muscle.container';
import { MuscularGroupContainer } from '@/modules/musculargroup/container/musculargroup.container';
import { UserContainer } from '@/modules/user/container/user.container';

export const Containers = {
	Auth: AuthContainer,
	User: UserContainer,
	BodySections: BodySectionContainer,
	MuscularGroup: MuscularGroupContainer,
	Muscle: MuscleContainer,
	Exercise: ExerciseContainer,
	ExerciseInitialStats: ExerciseInitialStatsContainer,
};
