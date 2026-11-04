'use client';

import { RoutineScheduleDay } from '@/modules/routine/presentation/ui/components/RoutineScheduleDay';
import { Button } from '@/presentation/modules/button/components/Button';
import { SwitchButton } from '@/presentation/modules/button/components/SwitchButton';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useState } from 'react';
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

/*
  TODO: 
  - [X] Design direct manipulation behavior:
    - [X] Empty routine recently created state
    - [X] Label updates by double clicking (name and description)
    - [X] Error fields (name and description)
    - [X] Persistence button for saving changes
    - [X] Add unsaved state indicator for updated elements (labels, schedule day, etc.)

  - UI logic/behavior:
    - Context: Component states, persisted, draft
    - Create custom hook for direct manipulation labels 
    (persisted, draft, isEditting, activeEdtion, cancelEdition, finishEdition, useEffect update -> persisted)
    - Integrate simple session selection in weekly schedule days with buttons
  
  - Draggables/Droppables: DnD system integration in Context (Later)
      - Drag and drop new session (add)
      - Delete dragged elements (remove)
      - Move sessions between brother components (session dropped -> no session)
      - Swap sessions brother components (session dropped <-> session dropped)

      - Move sessions between cousins components (other routine sessions)
      - Exchange sessions cousing components (other routine sessions)

 */

export function RoutineSchedule({ className, routine }: Props) {
  const sessionsCount = routine.weeklySchedule.filter((d) => d.session !== null).length;
  const restDaysCount = 7 - sessionsCount;

  // const [routineName, setRoutineName] = useState(routine.name);
  // const [isEditingRoutineName, setIsEditingRoutineName] = useState(false);

  // const [routineDescription, setRoutineDescription] = useState(routine.description);
  // const [isEditingRoutineDescription, setIsEditingRoutineDescription] = useState(false);

  const [isRoutineActive, setIsRoutineActive] = useState(routine.active);
  const [isRoutineCollapsed, setIsRoutineCollapsed] = useState(!routine.active);

  const toggleRoutineActive = () => {
    setIsRoutineActive((prev) => !prev);
  };

  const toggleRoutineCollapsed = () => {
    setIsRoutineCollapsed((prev) => !prev);
  };

  return (
    <article
      className={twMerge(
        'border-bd-base-default bg-sf-base-default rounded-xl border p-4',
        className
      )}
    >
      <header className="flex items-start gap-4">
        <div className="flex-1 space-y-1">
          <h3 className="body-large text-txt-base-heading transition-colors">{routine.name}</h3>
          {/* {!isEditingRoutineName ? (
            <h3
              onDoubleClick={() => setIsEditingRoutineName(true)}
              className={twMerge(
                'body-large transition-colors',
                isRoutineActive ? 'text-txt-base-heading' : 'text-txt-base-disabled'
              )}
            >
              {routineName}
            </h3>
          ) : (
            <div className="flex w-fit items-center gap-1">
              <input
                name="routine-description"
                onChange={(e) => setRoutineName(e.target.value)}
                onKeyDown={(e) => (e.key === 'Enter' ? setIsEditingRoutineName(false) : () => {})}
                value={routineName}
                className="body-large text-txt-heading w-fit"
                onLoad={(e) => e.currentTarget.focus()}
              />
              <button type="button" onClick={() => setIsEditingRoutineName(false)}>
                <Icon icon="check" variant={{ size: 'md', weight: 'thin' }} />
              </button>
            </div>
          )} */}
          <p
            className={twMerge(
              'body-medium transition-colors',
              isRoutineActive ? 'text-txt-base-body' : 'text-txt-base-disabled'
            )}
          >
            {routine.description ?? 'No description.'}
          </p>
          <div
            className={twMerge(
              'caption flex items-center gap-4 transition-colors',
              isRoutineActive ? 'text-txt-base-body' : 'text-txt-base-disabled'
            )}
          >
            <span className="flex items-center gap-1">
              <Icon
                icon="clipboard-list"
                variant={{ size: 'sm', weight: 'thin' }}
                className={twMerge(
                  isRoutineActive ? 'text-ic-base-caption' : 'text-ic-base-disabled'
                )}
              />
              {sessionsCount} sessions
            </span>

            <span className="flex items-center gap-1">
              <Icon
                icon="bed"
                variant={{ size: 'sm', weight: 'thin' }}
                className={twMerge(
                  isRoutineActive ? 'text-ic-base-caption' : 'text-ic-base-disabled'
                )}
              />
              {restDaysCount} rest days
            </span>
          </div>
        </div>
        {/* biome-ignore lint/a11y/useSemanticElements: button group correctly applied */}
        <div role="group" aria-label="Routine actions" className="flex items-center gap-2">
          <SwitchButton
            activeLabel="Disactivate routine"
            inactiveLabel="Activate routine"
            active={isRoutineActive}
            onClick={toggleRoutineActive}
          />
          <Button
            type="button"
            onClick={toggleRoutineCollapsed}
            variant={{ type: 'icon', size: 'md', color: 'simple' }}
            aria-expanded={isRoutineCollapsed}
            aria-label={isRoutineCollapsed ? 'Hide routine schedule' : 'Show routine schedule'}
          >
            <Icon
              icon={'chevron-down'}
              variant={{ size: 'md', weight: 'moderate' }}
              className={twMerge('transition-all', isRoutineCollapsed ? 'rotate-180' : 'rotate-0')}
            />
          </Button>
        </div>
      </header>
      <section className={twMerge('space-y-1 pt-4', isRoutineCollapsed && 'hidden')}>
        <h4 className="caption text-txt-base-caption">Weekly schedule</h4>
        <ol className="flex h-fit items-center">
          {routine.weeklySchedule.map((d, i) => (
            <li
              key={d.day}
              className="border-bd-base-subtle h-full flex-1 border not-first:border-l-0 first:rounded-l-lg last:rounded-r-lg"
            >
              <RoutineScheduleDay
                isFirst={i === 0}
                isLast={i === routine.weeklySchedule.length - 1}
                day={d.day}
                session={d.session}
                isDirty={i === 2}
              />
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
