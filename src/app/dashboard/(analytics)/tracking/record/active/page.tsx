import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import { twMerge } from 'tailwind-merge';
import { IconCheck, IconCircle, IconGolf, IconMinus, IconPlus } from '@tabler/icons-react';
import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { IconSchema } from '@/presentation/globals/components/icons/outline/IconSchema';
import { Button } from '@/presentation/modules/button/components/Button';
import { Link } from '@/presentation/modules/button/components/Link';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';

import { Check, Dumbbell, Flame, Weight } from 'lucide-react';
import { StatCard } from '@/presentation/modules/dashboard/components/StatCard';
import { LastTargets } from '@/presentation/modules/dashboard/components/LastTargets';

function Form({
  exercise,
  session,
  className = '',
}: {
  exercise: ExerciseDTO;
  session: SessionDTO;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'border-bd-muted from-fill-back to-fill-base space-y-4 rounded-4xl border bg-linear-315 from-[-25%] to-125% p-8',
        className
      )}
    >
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
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
                  />

                  <input
                    type="number"
                    className="h-8 w-full text-center text-lg"
                    defaultValue="4"
                  />

                  <Button
                    Icon={IconPlus}
                    aria-label="+1 sets"
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
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
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
                  />

                  <input
                    type="number"
                    className="h-8 w-full text-center text-lg"
                    defaultValue="16"
                  />

                  <Button
                    Icon={IconPlus}
                    aria-label="+1 sets"
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
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
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
                  />

                  <input
                    type="number"
                    className="h-8 w-full text-center text-xl"
                    defaultValue="50"
                  />

                  <Button
                    Icon={IconPlus}
                    aria-label="+1 sets"
                    variant={{ color: 'subtle', type: 'icon', size: 'sm' }}
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
  );
}

function Goals({ exercises, className = '' }: { exercises: ExerciseDTO[]; className?: string }) {
  return (
    <div className={twMerge('bg-fill-base border-bd-default rounded-4xl border', className)}>
      <header className="border-b-bd-default border-b px-6 py-4">
        <h4 className="text-xl">Goals</h4>
      </header>
      <main className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          {exercises.map((e, index) => (
            <div
              key={e.id}
              className={`h-1 w-full rounded-xl ${index < 2 ? 'bg-primary' : 'bg-fill-front'}`}
            />
          ))}
        </div>
        <div>
          <ul className="text-fg-default space-y-2 text-lg">
            {exercises.map((e, index) => {
              const isPlanned = index > 1;
              return (
                <div
                  key={e.id}
                  className={twMerge('flex gap-2', isPlanned && 'text-fg-muted font-light')}
                >
                  <div className="w-full">{e.name}</div>
                  <div className="w-24">{isPlanned ? '-' : `${e.sets} x ${e.reps}`}</div>
                  <div className="w-12">{isPlanned ? '-' : e.weight}</div>
                  <div className="w-fit">
                    {isPlanned ? (
                      <IconCircle className="size-5" strokeWidth={1.5} />
                    ) : (
                      <IconCheck className="size-5" />
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

function PremiumCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={twMerge(
        'border-bd-muted flex flex-col gap-8 rounded-[20px] border p-8',
        className
      )}
    >
      <header className="font-funnel-display text-[40px] font-bold tracking-tight">
        Get Premium: The Experience You Deserve
      </header>
      <main className="flex-1 text-[20px] font-light">
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="w-full">Unlimited Backups</span>
            <Check />
          </li>
          <li className="flex items-center">
            <span className="w-full">Wide Analytics</span>
            <Check />
          </li>
          <li className="flex items-center">
            <span className="w-full">Session Reminders</span>
            <Check />
          </li>
        </ul>
      </main>
      <footer>
        <Button variant={{ color: 'subtle', size: 'lg' }}>Become Premium</Button>
      </footer>
    </div>
  );
}

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
      <PageContent className="grid grid-cols-12 gap-4">
        <StatCard Icon={Flame} statData="156 Days" statTitle="Streak" className="col-span-3" />
        <StatCard
          Icon={Weight}
          statData="546 lb"
          statTitle="Plan Total Weight"
          className="col-span-3"
        />
        <StatCard
          Icon={Dumbbell}
          statData="274 reps"
          statTitle="Plan Total Reps"
          className="col-span-3"
        />

        <PremiumCard className="col-span-3 row-span-2" />

        <Form exercise={exercise} session={session} className="col-span-4" />

        <LastTargets className="col-span-2" />

        <Goals exercises={session.exercises} className="col-span-3" />
      </PageContent>
    </PageContainer>
  );
}
