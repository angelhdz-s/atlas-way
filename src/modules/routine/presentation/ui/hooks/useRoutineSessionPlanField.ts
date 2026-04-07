import { removeObjectKey } from '@/presentation/globals/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import type { ArrayPath, Control, FieldArrayWithId, FieldValues } from 'react-hook-form';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import type { RoutineForm } from '../config/routine.schema';

type ContainersKey = Props['containers'][number]['value'];

type DroppedItem = {
  [K in ContainersKey]?: SelectOption;
};

type TField<TForm extends FieldValues, TName extends ArrayPath<TForm>> = FieldArrayWithId<
  TForm,
  TName
>;

type Props = {
  options: SelectOption[];
  containers: SelectOption[];
};

type FullProps<TForm extends FieldValues, TName extends ArrayPath<TForm>> = {
  options: SelectOption[];
  containers: SelectOption[];
  control: Control<TForm>;
  name: TName;
  fieldMappers: {
    initialMapper: (container: SelectOption, containerIndex: number) => TForm[TName][number];
    replace?: (field: TField<TForm, TName>) => TField<TForm, TName>;
    swap: (
      fieldA: TField<TForm, TName>,
      fieldB: TField<TForm, TName>
    ) => [TField<TForm, TName>, TField<TForm, TName>];
    remove?: (field: TField<TForm, TName>) => TField<TForm, TName>;
    add: (field: TField<TForm, TName>, item: SelectOption) => TField<TForm, TName>;
  };
  data?: RoutineForm['sessions'];
};

export function useRoutineSessionPlanField<
  TForm extends FieldValues,
  TName extends ArrayPath<TForm>,
>({ options, containers, control, name, fieldMappers, data }: FullProps<TForm, TName>) {
  const [droppeds, setDroppeds] = useState<DroppedItem>({});
  const [selecting, setSelecting] = useState<number | null>(null);

  const { fields, update, replace } = useFieldArray<TForm>({
    control,
    name,
  });

  // Typed fields variable
  const typedFields: TField<TForm, TName>[] = fields;

  // selecting handling functions

  const closeSelection = () => {
    if (selecting !== null) setSelecting(null);
  };

  const setSelection = (containerIndex: number) => {
    if (containerIndex > -1 && containerIndex < containers.length) setSelecting(containerIndex);
  };

  // dropped handling functions

  const findOption = (key: ContainersKey): SelectOption | undefined => {
    return droppeds[key];
  };

  const addItem = ({
    itemId,
    containerIndex,
    containerKey,
  }: {
    itemId: string;
    containerKey: ContainersKey;
    containerIndex: number;
  }) => {
    const item = options.find((option) => option.value === itemId);
    if (!item) return;
    const targetField = typedFields[containerIndex];
    if (!targetField) return;

    setDroppeds((prev) => {
      const newSession = {
        [containerKey]: item,
      };

      return {
        ...prev,
        ...newSession,
      };
    });
    if (!fieldMappers?.add) return;

    const newField = fieldMappers.add(targetField, item);
    update(containerIndex, newField);
  };

  const moveSessionBetweenCycleDays = ({
    sourceId,
    sourceContainerIndex,
    sourceContainerKey,
    targetContainerIndex,
    targetContainerKey,
  }: {
    sourceId: string;
    sourceContainerKey: ContainersKey;
    sourceContainerIndex: number;
    targetContainerKey: ContainersKey;
    targetContainerIndex: number;
  }) => {
    const sourceField = typedFields[sourceContainerIndex];
    const targetField = typedFields[targetContainerIndex];

    if (!sourceField && !targetField) return;

    const item = options.find((option) => option.value === sourceId);
    if (!item) return;

    setDroppeds((prev) => {
      const newDropped = {
        [targetContainerKey]: item,
      };
      const removeKeyDroppreds = removeObjectKey({ ...prev }, sourceContainerKey);
      const newDroppeds = {
        ...removeKeyDroppreds,
        ...newDropped,
      };

      return {
        ...newDroppeds,
      };
    });

    if (!fieldMappers?.swap) return;

    const [newSourceField, newTargetField] = fieldMappers.swap(sourceField, targetField);

    // remove old source
    update(sourceContainerIndex, newSourceField);
    // add new target
    update(targetContainerIndex, newTargetField);
  };

  const removeDroppedCycleDay = ({
    containerId,
    containerIndex,
    itemId,
  }: {
    containerId: ContainersKey;
    containerIndex: number;
    itemId: string;
  }) => {
    const item = options.find((option) => option.value === itemId);
    if (!item) return;

    const field = typedFields[containerIndex];
    if (!field) return;

    setDroppeds((prev) => {
      const item = prev[containerId];
      if (!item) return prev;
      const newDroppeds = removeObjectKey({ ...prev }, containerId);
      return {
        ...newDroppeds,
      };
    });

    if (!fieldMappers.remove) return;

    const newField = fieldMappers.remove(field);
    update(containerIndex, newField);
  };

  const swapDroppeds = ({
    sourceContainerIndex,
    sourceContainerKey,
    targetContainerIndex,
    targetContainerKey,
  }: {
    sourceContainerKey: ContainersKey;
    sourceContainerIndex: number;
    targetContainerKey: ContainersKey;
    targetContainerIndex: number;
  }) => {
    const sourceField = typedFields[sourceContainerIndex];
    const targetField = typedFields[targetContainerIndex];

    if (!sourceField || !targetField) return;

    setDroppeds((prev) => {
      const droppedsCopy = { ...prev };
      const sourceValue = droppedsCopy[sourceContainerKey];
      const targetValue = droppedsCopy[targetContainerKey];

      droppedsCopy[sourceContainerKey] = targetValue;
      droppedsCopy[targetContainerKey] = sourceValue;

      return {
        ...droppedsCopy,
      };
    });

    if (!fieldMappers.swap) return;

    const [newSourceField, newTargetField] = fieldMappers.swap(sourceField, targetField);

    update(sourceContainerIndex, newSourceField);
    update(targetContainerIndex, newTargetField);
  };

  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) return;
    if (!data || data.length < 1) {
      const newFields = containers.map(fieldMappers.initialMapper);
      replace(newFields);
    } else {
      replace(data as any);
      setDroppeds((prev) => {
        const droppedsCopy = { ...prev };

        const droppedOptions: string[] = [];
        for (let i = 0; i < data.length; i++) {
          const routineDay = data[i];
          if (routineDay.sessionId !== null) {
            const option = options.find((o) => o.value === routineDay.sessionId);
            if (!option) continue;
            const dayKey = containers[i].value;
            droppedsCopy[dayKey] = option;
            droppedOptions.push(option.value);
          }
        }

        return {
          ...droppedsCopy,
        };
      });
    }

    initialRender.current = false;
  }, [replace, containers, fieldMappers, data, options]);

  return {
    selecting,
    get: {
      findOption,
    },
    actions: {
      swapDroppeds,
      addItem,
      moveSessionBetweenCycleDays,
      removeDroppedCycleDay,
    },
    selection: {
      closeSelection,
      setSelection,
    },
  };
}
