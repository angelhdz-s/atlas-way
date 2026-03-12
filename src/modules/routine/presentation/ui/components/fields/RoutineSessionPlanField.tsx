'use client';

import { IconCalendarWeek } from '@/presentation/globals/components/Icons';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { RoutineSessionPlanDraggableItem } from './RoutineSessionPlanDraggableItem';
import { RoutineSessionPlanDroppableItem } from './RoutineSessionPlanDroppableItem';
import { DragDropProvider } from '@dnd-kit/react';
import type { SelectOption } from '@/presentation/modules/form/types';
import { useRoutineSessionPlanField } from '../../hooks/useRoutineSessionPlanField';
import { RoutineSessionPlanSortableItem } from './RoutineSessionPlanSortableItem';
import { DroppableArea } from '@/presentation/globals/components/DroppabelArea';
import { isSortableOperation } from '@dnd-kit/react/sortable';

const SESSIONS_DATA: SelectOption[] = [
  {
    value: 'push',
    label: 'Push',
  },
  {
    value: 'pull',
    label: 'Pull',
  },
  {
    value: 'legs',
    label: 'Legs',
  },
  {
    value: 'chest',
    label: 'Chest',
  },
  {
    value: 'back',
    label: 'Back',
  },
  {
    value: 'shoulders',
    label: 'Shoulders',
  },
  {
    value: 'arms',
    label: 'Arms',
  },
  {
    value: 'core',
    label: 'Core',
  },
];

const CYCLE_DAYS_DATA = [
  {
    value: 'sunday',
    label: 'Sun',
  },
  {
    value: 'monday',
    label: 'Mon',
  },
  {
    value: 'tuesday',
    label: 'Tue',
  },
  {
    value: 'wednesday',
    label: 'Wed',
  },
];

export function RoutineSessionPlanField() {
  const { actions, data, get } = useRoutineSessionPlanField({
    containers: CYCLE_DAYS_DATA,
    options: SESSIONS_DATA,
  });

  return (
    <DragDropProvider
      onDragEnd={(e) => {
        const { operation } = e;
        const { target, source } = operation;

        if (isSortableOperation(operation)) return;

        // If there is no draggable element dragged
        if (!source) {
          return;
        }
        const sourceId = source.data.elementId;

        // If there is no draggble/droppable target element
        if (!target) {
          // Verify if source.id is a session already dropped into droppable element to remove it
          if (get.isDroppedValue(sourceId)) {
            actions.removeDroppedSession(sourceId);
          }
          return;
        }

        const currentTargetId = (target.id as string).split('-')[0];

        const isTargetDroppableItem = get.isPossibleDroppedKey(currentTargetId);

        const isSourceDroppedItem = source.data.dropped;

        if (!isTargetDroppableItem) {
          if (isSourceDroppedItem) {
            actions.removeDroppedSession(sourceId);
          }
          return;
        }

        const isTargetDropped = get.isDroppedKey(target.id as any);
        const targetId = target.id as string;
        if (!isTargetDropped && !isSourceDroppedItem) {
          const formattedSourceId = sourceId.split('-')[0] as string;
          actions.addDroppedSession(formattedSourceId, targetId);
          return;
        }

        const sourceDroppableItem = get.getCycleDayBySession(sourceId);
        if (!sourceDroppableItem) {
          const formattedSourceId = sourceId.split('-')[0] as string;
          actions.removeDroppedCycleDay(targetId);
          actions.addDroppedSession(formattedSourceId, targetId);
          return;
        }

        if (!isTargetDropped) {
          actions.moveSessionBetweenCycleDays(sourceDroppableItem, targetId);
          return;
        }

        if (isTargetDropped && isSourceDroppedItem && sourceDroppableItem !== target.id) {
          actions.swapDroppeds(target.id as string, sourceDroppableItem as string);
          return;
        }
        return;
      }}
    >
      <FormFieldSection title="Your Plan" Icon={IconCalendarWeek}>
        <div>
          <div className="*:bg-back grid w-full grid-cols-4 items-center gap-2 *:h-16 *:rounded *:p-2 *:text-sm">
            {CYCLE_DAYS_DATA.map((day) => {
              const option = get.findOption(day.value);
              const key = option ? `${day.value}-${option?.value}` : day.value;
              return (
                <RoutineSessionPlanDroppableItem key={key} id={day.value} text={day.label}>
                  {option && (
                    <RoutineSessionPlanDraggableItem
                      key={`${option.value}`}
                      id={`${option.value}`}
                      text={option.label}
                    />
                  )}
                </RoutineSessionPlanDroppableItem>
              );
            })}
          </div>
          <div className="">
            <DroppableArea
              key={`unsortable-items-${data.nonDroppedItems.length}`}
              id="undropped-sessions"
              className="mt-2 flex w-full flex-wrap items-center gap-1"
            >
              {data.nonDroppedItems.map((session, index) => {
                return (
                  <RoutineSessionPlanSortableItem
                    key={`${session.value}`}
                    id={`${session.value}`}
                    text={session.label}
                    index={index}
                  />
                );
              })}
            </DroppableArea>
          </div>
        </div>
        <p className="mt-2">Empty days are rest days</p>
      </FormFieldSection>
    </DragDropProvider>
  );
}
