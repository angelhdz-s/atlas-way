'use client';

import { DragDropProvider } from '@dnd-kit/react';
import { DroppableArea } from '@/presentation/globals/components/DroppabelArea';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconBarbell, IconCalendarWeek, IconZZ } from '@/presentation/globals/components/Icons';
import { isSortableOperation } from '@dnd-kit/react/sortable';
import { RoutineSessionPlanDraggableItem } from './RoutineSessionPlanDraggableItem';
import { RoutineSessionPlanDroppableItem } from './RoutineSessionPlanDroppableItem';
import { RoutineSessionPlanSortableItem } from './RoutineSessionPlanSortableItem';
import { type FieldArrayWithId, useFormContext } from 'react-hook-form';
import { useRoutineSessionPlanField } from '../../hooks/useRoutineSessionPlanField';
import type {
  DnDFormFieldItemData,
  DnDFormFieldItemDraggableData,
  SelectOption,
} from '@/presentation/modules/form/form.types';
import type { RoutineForm } from '../../config/routine.schema';

type Props = {
  sessions: SelectOption[];
  days: SelectOption[];
};

type RoutineSessionField = FieldArrayWithId<RoutineForm, 'sessions'>;

export function RoutineSessionPlanField({ sessions, days }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext<RoutineForm>();

  const initialMapper = (
    container: SelectOption,
    index: number
  ): RoutineForm['sessions'][number] => ({
    day: index,
    dayName: container.label,
    sessionId: null,
  });

  const appendMapper = (field: RoutineSessionField, item: SelectOption): RoutineSessionField => ({
    ...field,
    sessionId: item.value,
  });

  const swapMapper = (
    fieldA: RoutineSessionField,
    fieldB: RoutineSessionField
  ): [RoutineSessionField, RoutineSessionField] => [
    {
      ...fieldA,
      sessionId: fieldB.sessionId,
    },
    {
      ...fieldB,
      sessionId: fieldA.sessionId,
    },
  ];

  const removeMapper = (field: RoutineSessionField): RoutineSessionField => ({
    ...field,
    sessionId: null,
  });

  const {
    actions: { addItem, moveSessionBetweenCycleDays, removeDroppedCycleDay, swapDroppeds },
    data,
    get: { findOption },
  } = useRoutineSessionPlanField({
    containers: days,
    options: sessions,
    control,
    name: 'sessions',
    fieldMappers: {
      initialMapper,
      add: appendMapper,
      swap: swapMapper,
      remove: removeMapper,
    },
  });

  return (
    <DragDropProvider
      onDragEnd={(e) => {
        const { operation } = e;
        const { target, source } = operation;

        if (isSortableOperation(operation)) return;

        if (!source || !source.data?.id) {
          return;
        }

        const sourceData = source.data as DnDFormFieldItemDraggableData;

        if (!target) {
          if (sourceData.containerId) {
            removeDroppedCycleDay({
              containerData: {
                id: sourceData.containerId,
                index: sourceData.containerIndex,
              },
              itemData: {
                id: sourceData.id,
              },
            });
          }
          return;
        }

        const targetData = target.data as DnDFormFieldItemData;

        if (sourceData.containerId === targetData.id) return;

        if (targetData.type !== 'droppable') {
          if (sourceData.containerId)
            removeDroppedCycleDay({
              containerData: {
                id: sourceData.containerId,
                index: sourceData.containerIndex,
              },
              itemData: {
                id: sourceData.id,
              },
            });
          return;
        }

        if (!targetData.droppedId && !sourceData.containerId) {
          addItem({
            itemData: {
              id: sourceData.id,
            },
            containerData: {
              index: targetData.index,
              key: targetData.id,
            },
          });
          return;
        }

        if (!sourceData.containerId) {
          removeDroppedCycleDay({
            containerData: {
              id: targetData.id,
              index: targetData.index,
            },
            itemData: {
              id: sourceData.id,
            },
          });
          addItem({
            itemData: {
              id: sourceData.id,
            },
            containerData: {
              index: targetData.index,
              key: targetData.id,
            },
          });
          return;
        }

        if (!targetData.droppedId) {
          moveSessionBetweenCycleDays({
            source: {
              containerIndex: sourceData.containerIndex,
              containerKey: sourceData.containerId,
              id: sourceData.id,
            },
            target: {
              containerIndex: targetData.index,
              containerKey: targetData.id,
            },
          });
          return;
        }

        if (sourceData.containerId && sourceData.containerId !== targetData.id) {
          swapDroppeds({
            source: {
              containerIndex: sourceData.containerIndex,
              containerKey: sourceData.containerId,
            },
            target: {
              containerIndex: targetData.index,
              containerKey: targetData.id,
            },
          });
          return;
        }
        return;
      }}
    >
      <FormFieldSection title="Your Plan" Icon={IconCalendarWeek}>
        <div className="space-y-2">
          <header className="fg-strong font-medium">Your days plan</header>
          <div className="grid w-full grid-cols-4 items-center gap-2">
            {days.map((day, index) => {
              const option = findOption(day.value);
              const key = option ? `${day.value}-${option?.value}` : day.value;
              return (
                <RoutineSessionPlanDroppableItem
                  key={key}
                  id={key}
                  text={day.label}
                  Icon={option ? IconBarbell : IconZZ}
                  dndConfig={{ droppedId: option?.value, id: day.value, index, type: 'droppable' }}
                >
                  {option && (
                    <RoutineSessionPlanDraggableItem
                      key={`${option.value}`}
                      id={`${option.value}`}
                      text={option.label}
                      dndConfig={{
                        containerId: day.value,
                        id: option.value,
                        containerIndex: index,
                        type: 'draggable',
                      }}
                    />
                  )}
                </RoutineSessionPlanDroppableItem>
              );
            })}
          </div>
          <div className="">
            {data.nonDroppedItems.length > 0 && <header>Your sessions</header>}
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
                    dndConfig={{
                      id: session.value,
                      containerId: undefined,
                      type: 'draggable',
                    }}
                  />
                );
              })}
            </DroppableArea>
          </div>
        </div>
        <p>Empty days are rest days</p>
        <ErrorMessage message={errors.sessions?.message} />
      </FormFieldSection>
    </DragDropProvider>
  );
}
