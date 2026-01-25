import { makeAuthModule } from '@/modules/auth/auth.container';
import { makeBodySectionModule } from '@/modules/body-section/body-section.container';
import { makeExerciseModule } from '@/modules/exercise/exercise.container';
import { makeExerciseToMuscleModule } from '@/modules/exercise/link/muscle/exercise-to-muscle.container';
import { makeMuscleModule } from '@/modules/muscle/muscle.container';
import { makeMuscularGroupModule } from '@/modules/muscular-group/muscular-group.container';
import { makeNotificationModule } from '@/modules/notification/notification.container';
import { makeRoutineModule } from '@/modules/routine/routine.container';
import { makeRoutineDaysModule } from '@/modules/routine-days/routine-days.container';
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
		exerciseToMuscle: makeExerciseToMuscleModule(),
		routine: makeRoutineModule(),
		routineDays: makeRoutineDaysModule(),
		session: makeSessionModule(),
	};
};
