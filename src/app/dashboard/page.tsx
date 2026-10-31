import { EXERCISES_LATERAL_PANEL_MOCK } from '@/modules/exercise/mocks/exercise.mocks.ui';
import { ExercisePanelItem } from '@/modules/exercise/presentation/ui/components/ExercisePanelItem';
import { ACTIVE_ROUTINES_MOCK } from '@/modules/routine/mocks/routine.mocks.ui';
import { ActiveRoutineItem } from '@/modules/routine/presentation/ui/components/ActiveRoutineItem';
import { SESSIONS_LATERAL_PANEL_MOCK } from '@/modules/session/mocks/session.mocks.ui';
import { SessionPanelItem } from '@/modules/session/presentation/ui/components/SessionPanelItem';
import { WEEK_ACTIVITY_DAYS_MOCK } from '@/modules/tracking/mocks/tracking.mocks.ui';
import { WeekActivity } from '@/modules/tracking/presentation/ui/components/WeekActivity';
import { WorkoutCard } from '@/modules/tracking/presentation/ui/components/WorkoutCard';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { PageLateralPanel } from '@/presentation/modules/dashboard/components/page/PageLateralPanel';

export default function Dashboard() {
  return (
    <PageContainer className="flex flex-1 flex-row gap-8 overflow-x-clip">
      <main className="flex-1 space-y-8">
        <PageHeader title="Dashboard" description="Your personal fitness dashboard" />
        <PageContent className="space-y-6">
          {/* First Row */}
          <div className="flex gap-8">
            {/* Card */}
            <WorkoutCard
              title="Push day"
              icon="clipboard-list"
              completedExercises={6}
              totalExercises={6}
              href="#"
            />

            {/* Current Week */}

            <div className="flex-1 space-y-4">
              <header className="flex items-center">
                <h3 className="heading-6 text-txt-base-heading w-full">Current week</h3>
              </header>
              <WeekActivity days={WEEK_ACTIVITY_DAYS_MOCK} />
            </div>
          </div>

          {/* Second Row */}
          <div className="space-y-4">
            <header className="flex items-center">
              <h3 className="heading-6 text-txt-base-heading w-full">Active routines</h3>
            </header>
            <main>
              <ul className="space-y-2">
                {ACTIVE_ROUTINES_MOCK.map(({ name, description, date, daysWithSessions }) => (
                  <li key={`active-routine-${name}-${date}`}>
                    <ActiveRoutineItem
                      name={name}
                      description={description}
                      date={date}
                      daysWithSessions={daysWithSessions}
                    />
                  </li>
                ))}
              </ul>
            </main>
          </div>
        </PageContent>
      </main>
      <PageLateralPanel>
        <section className="w-full space-y-2">
          <h2 className="heading-6 text-txt-base-heading">Your sessions</h2>
          <div>
            <ul className="w-full space-y-2">
              {SESSIONS_LATERAL_PANEL_MOCK.map(({ name, date, exerciseCount, href }) => (
                <li key={name} className="w-full">
                  <SessionPanelItem
                    name={name}
                    date={date}
                    exerciseCount={exerciseCount}
                    href={href}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="w-full space-y-2">
          <h2 className="heading-6 text-txt-base-heading">Your exercises</h2>
          <div>
            <ul className="w-full space-y-2">
              {EXERCISES_LATERAL_PANEL_MOCK.map(({ name, date, sets, reps, href }) => (
                <li key={name} className="w-full">
                  <ExercisePanelItem name={name} date={date} sets={sets} reps={reps} href={href} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </PageLateralPanel>
    </PageContainer>
  );
}
