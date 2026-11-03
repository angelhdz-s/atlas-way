import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { Link } from '@/presentation/modules/button/components/Link';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { PageLateralPanel } from '@/presentation/modules/dashboard/components/page/PageLateralPanel';
import { LateralPanelSection } from '@/presentation/modules/dashboard/components/LateralPanelSection';
import { SessionLateralPanelDraggableItem } from '@/modules/session/presentation/ui/components/SessionLateralPanelDraggableItem';
import { SESSION_LATERAL_PANEL_DRAGGABLE_MOCK } from '@/modules/session/mocks/session.mocks.ui';
import { RoutineSchedule } from '@/modules/routine/presentation/ui/components/RoutineSchedule';
import { ROUTINE_SCHEDULES_MOCK } from '@/modules/routine/mocks/routine.mocks.ui';

export default async function RoutinesPage() {
  const routinesResult = await getAllRoutines();

  const routines = routinesResult.success ? routinesResult.data : [];

  if (routines.length < 1) return <RoutineEmptyData />;

  return (
    <PageContainer className="flex gap-8">
      <main className="flex-1 space-y-8">
        <header className="flex items-center gap-4">
          <PageHeader
            title="Your Routines"
            description="Create and manage your routines to automate tasks and workflows."
            className="flex-1"
          />
          <Link variant={{ color: 'primary' }} href="/dashboard/routines/create">
            <Icon icon="plus" variant={{ size: 'md', weight: 'moderate' }} />
            New routine
          </Link>
        </header>
        <PageContent className="flex flex-col gap-4">
          <section className="flex flex-wrap gap-4">
            <ul className="w-full space-y-4">
              {ROUTINE_SCHEDULES_MOCK.map((r) => (
                <li key={r.name}>
                  <RoutineSchedule routine={r} />
                </li>
              ))}
            </ul>
          </section>
        </PageContent>
      </main>
      <PageLateralPanel>
        <LateralPanelSection title="Your sessions">
          <ul className="space-y-4">
            {SESSION_LATERAL_PANEL_DRAGGABLE_MOCK.map((s) => (
              <li key={`${s.name}`}>
                <SessionLateralPanelDraggableItem
                  session={s}
                  actions={[
                    {
                      icon: 'trash',
                      label: 'Delete',
                      href: '#',
                    },
                  ]}
                />
              </li>
            ))}
          </ul>
        </LateralPanelSection>
      </PageLateralPanel>
    </PageContainer>
  );
}
