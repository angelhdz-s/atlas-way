'use client';

import { DragDropProvider } from '@dnd-kit/react';
import { isSortableOperation } from '@dnd-kit/react/sortable';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconCalendarWeek } from '@/presentation/globals/components/icons/outline/IconCalendarWeek';
import { RoutineSessionPlanDraggableItem } from '@/modules/routine/presentation/ui/components/fields/RoutineSessionPlanDraggableItem';
import { RoutineSessionPlanDroppableItem } from '@/modules/routine/presentation/ui/components/fields/RoutineSessionPlanDroppableItem';
import { useRoutineSessionPlanField } from '@/modules/routine/presentation/ui/hooks/useRoutineSessionPlanField';
import { TooltipSelect } from '@/presentation/modules/form/components/tooltip/TooltipSelect';
import { type FieldArrayWithId, useFormContext } from 'react-hook-form';
import type {
  DnDFormFieldItemData,
  DnDFormFieldItemDraggableData,
  SelectOption,
} from '@/presentation/modules/form/form.types';
import type { RoutineForm } from '@/modules/routine/presentation/ui/config/routine.schema';

type Props = {
  sessions: SelectOption[];
  days: SelectOption[];
  routineDays?: RoutineForm['sessions'];
};

type RoutineSessionField = FieldArrayWithId<RoutineForm, 'sessions'>;

export function RoutineSessionPlanField({ sessions, days, routineDays }: Props) {
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
    get: { findOption },
    selecting,
    selection: { closeSelection, setSelection },
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
    data: routineDays,
  });

  const handleAddItem = (containerIndex: number, containerKey: string) => (value: string) => {
    const itemId = value;
    if (!itemId) return;
    addItem({
      itemId,
      containerIndex,
      containerKey,
    });
  };

  const handleRemoveItem = (containerId: string, containerIndex: number, itemId: string) => () => {
    removeDroppedCycleDay({
      containerId,
      containerIndex,
      itemId,
    });
  };

  const isSelectionOpen = selecting !== null && days[selecting] !== undefined;

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

        if (!target) return;

        const targetData = target.data as DnDFormFieldItemData;

        if (sourceData.containerId === targetData.id) return;

        if (targetData.type !== 'droppable') {
          if (sourceData.containerId)
            removeDroppedCycleDay({
              containerId: sourceData.containerId,
              containerIndex: sourceData.containerIndex,
              itemId: sourceData.id,
            });
          return;
        }

        if (!sourceData.containerId) return;

        if (!targetData.droppedId) {
          moveSessionBetweenCycleDays({
            sourceContainerIndex: sourceData.containerIndex,
            sourceContainerKey: sourceData.containerId,
            sourceId: sourceData.id,
            targetContainerIndex: targetData.index,
            targetContainerKey: targetData.id,
          });
          return;
        }

        if (sourceData.containerId && sourceData.containerId !== targetData.id) {
          swapDroppeds({
            sourceContainerIndex: sourceData.containerIndex,
            sourceContainerKey: sourceData.containerId,
            targetContainerIndex: targetData.index,
            targetContainerKey: targetData.id,
          });
          return;
        }
        return;
      }}
    >
      <FormFieldSection title="Your Plan" Icon={IconCalendarWeek}>
        <div className="space-y-2">
          <div className="grid w-full grid-cols-4 items-center gap-2">
            {days.map((day, index) => {
              const option = findOption(day.value);
              const key = option ? `${day.value}-${option?.value}` : day.value;
              return (
                <RoutineSessionPlanDroppableItem
                  key={key}
                  id={key}
                  text={day.label}
                  onAdd={option ? undefined : () => setSelection(index)}
                  dndConfig={{ droppedId: option?.value, id: day.value, index, type: 'droppable' }}
                >
                  {option && (
                    <RoutineSessionPlanDraggableItem
                      key={`${day.value}-${option.value}`}
                      id={`${day.value}-${option.value}`}
                      text={option.label}
                      onRemove={handleRemoveItem(day.value, index, option.value)}
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
        </div>
        <p>Empty days are rest days</p>
        <ErrorMessage message={errors.sessions?.message} />
      </FormFieldSection>
      {isSelectionOpen && (
        <TooltipSelect
          isOpen={isSelectionOpen}
          label="Session"
          selectOptions={sessions}
          title={`${days[selecting].label}'s Session`}
          onClose={closeSelection}
          onSelectChange={handleAddItem(selecting, days[selecting].value)}
        />
      )}
    </DragDropProvider>
  );
}
