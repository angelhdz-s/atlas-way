import { RoutineScheduleDay } from '@/modules/routine/presentation/ui/components/RoutineScheduleDay';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type RoutineProps = {
  name: string;
  description: string | null;
  active: boolean;
  weeklySchedule: {
    day: number;
    session: {
      name: string;
    } | null;
  }[];
};

type Props = {
  className?: string;
  routine: RoutineProps;
};

export function RoutineSchedule({ className, routine }: Props) {
  const sessionsCount = routine.weeklySchedule.filter((d) => d.session !== null).length;
  const restDaysCount = 7 - sessionsCount;
  return (
    <article
      className={twMerge(
        'border-bd-base-default bg-sf-base-default rounded-xl border p-4',
        className
      )}
    >
      <header className="flex items-start gap-4">
        <div className="flex-1 space-y-1">
          <h3
            className={twMerge(
              'body-large',
              routine.active ? 'text-txt-base-heading' : 'text-txt-base-disabled'
            )}
          >
            {routine.name}
          </h3>
          <p
            className={twMerge(
              'body-medium',
              routine.active ? 'text-txt-base-body' : 'text-txt-base-disabled'
            )}
          >
            {routine.description ?? 'No description.'}
          </p>
          <div
            className={twMerge(
              'caption flex items-center gap-4',
              routine.active ? 'text-txt-base-body' : 'text-txt-base-disabled'
            )}
          >
            <span className="flex items-center gap-1">
              <Icon
                icon="clipboard-list"
                variant={{ size: 'sm', weight: 'thin' }}
                className={twMerge(
                  routine.active ? 'text-ic-base-caption' : 'text-ic-base-disabled'
                )}
              />
              {sessionsCount} sessions
            </span>

            <span className="flex items-center gap-1">
              <Icon
                icon="bed"
                variant={{ size: 'sm', weight: 'thin' }}
                className="text-ic-base-caption gap-1"
              />
              {restDaysCount} rest days
            </span>
          </div>
        </div>
        {/* biome-ignore lint/a11y/useSemanticElements: button group correctly applied */}
        <div role="group" aria-label="Routine actions" className="flex items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={true}
            className={twMerge(
              'h-8 w-12 cursor-pointer rounded-full border',
              'before:bg-sf-base-inverse before:my-auto before:block before:aspect-square before:h-5 before:rounded-full',
              routine.active
                ? 'bg-sf-action-default border-bd-action-default'
                : 'bg-sf-base-page border-bd-base-default',
              routine.active ? 'before:mr-1.5 before:ml-auto' : 'before:mr-auto before:ml-1.5'
            )}
          />
          <Button
            type="button"
            variant={{ type: 'icon', size: 'md', color: 'simple' }}
            aria-expanded={true}
            aria-label="Hide routine schedule"
          >
            <Icon icon="chevron-down" variant={{ size: 'md', weight: 'moderate' }} />
          </Button>
        </div>
      </header>
      <section className="space-y-1 pt-4">
        <h4 className="caption text-txt-base-caption">Weekly schedule</h4>
        <ol className="border-bd-base-subtle [&>li]:not-first:border-bd-base-subtle flex items-center overflow-hidden rounded-lg border [&>li]:flex-1 [&>li]:not-first:border-l">
          {routine.weeklySchedule.map((d) => (
            <li key={d.day}>
              <RoutineScheduleDay day={d.day} session={d.session} />
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
