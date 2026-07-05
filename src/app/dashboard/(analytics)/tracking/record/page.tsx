import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { IconSchema } from '@/presentation/globals/components/icons/outline/IconSchema';
import { Button } from '@/presentation/modules/button/components/Button';
import { Link } from '@/presentation/modules/button/components/Link';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { IconGripVertical, IconPlus, IconSwitch, IconX } from '@tabler/icons-react';

export default async function TrackingRecordPage() {
  const routinesResult = await getAllRoutines();
  const routine = routinesResult.success ? routinesResult.data[0] : null;
  if (!routine) return null;
  const plan = routine.plan.find((p) => p.session !== null);
  if (!plan) return null;

  const { session } = plan;
  if (!session) return null;

  return (
    <PageContainer>
      <PageHeader title="Tracking" description="Track your progress and achieve your goals" />
      <PageContent>
        <div className="w-lg space-y-4 p-4">
          <div className="flex items-center gap-2">
            {session.exercises.map((e) => (
              <div key={e.id} className="bg-primary h-1 w-full rounded-xl"></div>
            ))}
          </div>
          <header className="bg-primary rounded-2xl px-3 py-2">
            <div className="flex items-center gap-4">
              <aside className="bg-primary-dark grid aspect-square size-10 place-content-center rounded-lg">
                <IconSchema className="size-5" />
              </aside>
              <main className="w-full space-y-1">
                <h4 className="text-lg leading-none">{session.name}</h4>
                <p className="text-fg-default line-clamp-1 leading-none font-light">
                  {session.description}
                </p>
              </main>
              <div>
                <Button variant={{ color: 'subtle', type: 'text' }}>Switch</Button>
              </div>
            </div>
          </header>

          <main className="space-y-2">
            <div className="space-y-1">
              <h6 className="text-fg-default font-light">Exercise</h6>
              <ul className="space-y-2">
                {session.exercises.map((e) => (
                  <li
                    key={e.id}
                    className="bg-fill-base border-bd-default flex items-center gap-4 rounded-xl border py-1 pr-1 pl-2"
                  >
                    <div>
                      <IconGripVertical className="text-fg-default size-5" />
                    </div>
                    <div className="w-full">{e.name}</div>
                    <div className="whitespace-nowrap">
                      {e.sets} x {e.reps}
                    </div>
                    <div>Bilateral</div>
                    <div className="flex items-center gap-2">
                      <Button
                        aria-label="Switch exercise"
                        Icon={IconSwitch}
                        variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
                      />
                      <Button
                        aria-label="Switch exercise"
                        Icon={IconX}
                        variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <footer>
              <Button
                aria-label="Add exercise"
                Icon={IconPlus}
                variant={{ color: 'outline', type: 'icon', size: 'sm' }}
              />
            </footer>
          </main>
          <footer className="flex w-full items-center justify-end">
            <Link
              href="/dashboard/tracking/record/active"
              variant={{ color: 'primary', type: 'text', size: 'lg' }}
            >
              Proceed
            </Link>
          </footer>
        </div>
      </PageContent>
    </PageContainer>
  );
}
