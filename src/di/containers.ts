import { makeAuthModule } from '@/modules/auth/auth.container';
import { makeBodySectionModule } from '@/modules/bodysection/bodysection.container';
import { makeExerciseModule } from '@/modules/exercise/exercise.container';
import { makeExerciseToMuscleModuel } from '@/modules/exercise/link/muscle/exercise-to-muscle.container';
import { makeMuscleModule } from '@/modules/muscle/muscle.container';
import { makeMuscularGroupModule } from '@/modules/musculargroup/musculargroup.container';
import { makeNotificationModule } from '@/modules/notification/notification.container';
import { makeRoutineModule } from '@/modules/routine/routine.container';
import { makeRoutineDaysContainer } from '@/modules/routinedays/routinedays.container';
import { makeSessionModule } from '@/modules/session/session.container';
import { makeUserModule } from '@/modules/user/user.container';

export const getContainer = () => {
	return {
		auth: makeAuthModule(),
		user: makeUserModule(),
		notification: makeNotificationModule(),
		bodySection: makeBodySectionModule(),
		muscularGroup: makeMuscularGroupModule(),
		muscle: makeMuscleModule(),
		exercise: makeExerciseModule(),
		exerciseInitialStats: makeExerciseModule(),
		exerciseToMuscle: makeExerciseToMuscleModuel(),
		routine: makeRoutineModule(),
		routineDays: makeRoutineDaysContainer(),
		session: makeSessionModule(),
	};
};
