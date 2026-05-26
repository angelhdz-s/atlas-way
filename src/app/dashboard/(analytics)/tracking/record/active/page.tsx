import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { IconSchema } from '@/presentation/globals/components/icons/outline/IconSchema';
import { Button } from '@/presentation/modules/button/components/Button';
import { Link } from '@/presentation/modules/button/components/Link';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { IconGolf, IconMinus, IconPlus } from '@tabler/icons-react';

export default async function TrackingRecordActivePage() {
  const routinesResult = await getAllRoutines();
  const routine = routinesResult.success ? routinesResult.data[0] : null;
  if (!routine) return null;
  const plan = routine.plan.find((p) => p.session !== null);
  if (!plan) return null;

  const { session } = plan;
  if (!session) return null;

  const exercise = session.exercises[0];
  if (!exercise) return null;

  return (
    <PageContainer>
      <PageHeader title="Tracking" description="Track your progress and achieve your goals" />
      <PageContent>
        <div className="bg-fill-base border-bd-default w-136 space-y-4 rounded-4xl border p-8">
          <div className="flex items-center gap-2">
            {session.exercises.map((e, index) => (
              <div
                key={e.id}
                className={`h-1 w-full rounded-xl ${index < 1 ? 'bg-primary' : 'bg-fill-front'}`}
              />
            ))}
          </div>
          <header className="bg-primary rounded-2xl px-3 py-2">
            <div className="flex items-center gap-4">
              <aside className="bg-primary-dark grid aspect-square size-10 place-content-center rounded-lg">
                <IconSchema className="size-5" />
              </aside>
              <main className="w-full space-y-1">
                <h4 className="text-lg leading-none">{exercise.name}</h4>
                <p className="text-fg-default line-clamp-1 leading-none font-light">
                  {exercise.description}
                </p>
              </main>
              <div>
                <Button variant={{ color: 'subtle', type: 'text' }}>Switch</Button>
              </div>
            </div>
          </header>

          <main className="space-y-4">
            <div className="space-y-1">
              <h5 className="font-light">Last goal</h5>
              <div className="border-bd-default text-fg-default flex items-center gap-8 rounded-xl border px-3 py-2 font-light *:whitespace-nowrap">
                <div className="w-full">March 24</div>
                <div>4 sets</div>
                <div>16 reps</div>
                <div>50 lbs</div>
              </div>
            </div>
            <main className="space-y-1">
              <h5 className="border-bd-default text-fg-strong flex items-center gap-1 border-b pb-2 font-light">
                <IconGolf />
                {exercise.name}'s goal
              </h5>
              <div className="flex w-full items-center justify-center gap-2 py-8">
                <div>
                  <label>
                    Sets
                    <div className="border-bd-default bg-fill-base mt-2 flex items-center rounded-full border p-1">
                      <Button
                        Icon={IconMinus}
                        aria-label="-1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />

                      <input
                        type="number"
                        className="h-8 w-16 text-center text-lg"
                        defaultValue="4"
                      />

                      <Button
                        Icon={IconPlus}
                        aria-label="+1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />
                    </div>
                  </label>
                  <div className="text-fg-muted mt-2 font-light">+ 1 set</div>
                </div>
                <div>
                  <label>
                    Reps
                    <div className="border-bd-default bg-fill-base mt-2 flex items-center rounded-full border p-1">
                      <Button
                        Icon={IconMinus}
                        aria-label="-1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />

                      <input
                        type="number"
                        className="h-8 w-16 text-center text-lg"
                        defaultValue="16"
                      />

                      <Button
                        Icon={IconPlus}
                        aria-label="+1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />
                    </div>
                  </label>
                  <div className="text-fg-muted mt-2 font-light">+ 1 set</div>
                </div>
                <div>
                  <label>
                    Weight (lb)
                    <div className="border-bd-default bg-fill-base mt-2 flex items-center rounded-full border p-1">
                      <Button
                        Icon={IconMinus}
                        aria-label="-1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />

                      <input
                        type="number"
                        className="h-8 w-16 text-center text-lg"
                        defaultValue="50"
                      />

                      <Button
                        Icon={IconPlus}
                        aria-label="+1 sets"
                        variant={{ color: 'primary', type: 'icon', size: 'sm' }}
                      />
                    </div>
                  </label>
                  <div className="text-fg-muted mt-2 font-light">+ 1 set</div>
                </div>
              </div>
            </main>
          </main>

          <footer className="flex w-full items-center justify-between">
            <Link
              href="/dashboard/tracking/record/active"
              variant={{ color: 'simple', type: 'text', size: 'lg' }}
            >
              Back
            </Link>

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
