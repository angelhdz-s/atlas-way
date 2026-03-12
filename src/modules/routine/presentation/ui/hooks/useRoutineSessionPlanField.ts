import { removeObjectKey } from '@/presentation/globals/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import type { ArrayPath, Control, FieldValues } from 'react-hook-form';
import type { SelectOption } from '@/presentation/modules/form/types';

type ContainersKey = Props['containers'][number]['value'];

type DroppedItem = {
  [K in ContainersKey]?: SelectOption;
};

type Props = {
  options: SelectOption[];
  containers: SelectOption[];
};

type FullProps<TForm extends FieldValues, TName extends ArrayPath<TForm>> = {
  options: SelectOption[];
  containers: SelectOption[];
  control: Control<TForm>;
  name: TName;
  initialMapper: (container: SelectOption, containerIndex: number) => TForm[TName][number];
  mapper: (
    item: SelectOption,
    container: SelectOption,
    containerIndex: number
  ) => TForm[TName][number];
};

export function useRoutineSessionPlanField<
  TForm extends FieldValues,
  TName extends ArrayPath<TForm>,
>({ options, containers, control, name, initialMapper, mapper }: FullProps<TForm, TName>) {
  const [state, setState] = useState<{
    droppeds: DroppedItem;
    nonDroppedItems: SelectOption[];
  }>({
    droppeds: {},
    nonDroppedItems: options,
  });

  const { fields, update, replace } = useFieldArray<TForm>({
    control,
    name,
  });

  const findOption = (key: ContainersKey): SelectOption | undefined => {
    return state.droppeds[key];
  };

  const addItem = (itemId: string, containerId: ContainersKey, containerIndex: number) => {
    const item = options.find((option) => option.value === itemId);
    if (!item) return;
    const container = containers.find((container) => container.value === containerId);
    if (!container) return;
    setState((prev) => {
      const newSession = {
        [containerId]: item,
      };
      const newNonDroppedItems = [...prev.nonDroppedItems.filter((item) => item.value !== itemId)];
      const newDroppeds = {
        ...prev.droppeds,
        ...newSession,
      };

      return {
        droppeds: newDroppeds,
        nonDroppedItems: newNonDroppedItems,
      };
    });
    update(containerIndex, mapper(item, container, containerIndex));
  };

  console.log(fields);

  const moveSessionBetweenCycleDays = (
    sourceContainer: ContainersKey,
    targetContainer: ContainersKey
  ) => {
    setState((prev) => {
      const item = prev.droppeds[sourceContainer];
      if (!item) return prev;
      const newDropped = {
        [targetContainer]: item,
      };
      const removeKeyDroppreds = removeObjectKey({ ...prev.droppeds }, sourceContainer);
      const newDroppeds = {
        ...removeKeyDroppreds,
        ...newDropped,
      };

      return {
        ...prev,
        droppeds: {
          ...newDroppeds,
        },
      };
    });
  };

  const removeDroppedCycleDay = (containerId: ContainersKey) => {
    setState((prev) => {
      const item = prev.droppeds[containerId];
      if (!item) return prev;
      const newDroppeds = removeObjectKey({ ...prev.droppeds }, containerId);
      const newNonDroppedItems = [...prev.nonDroppedItems, item];
      return {
        droppeds: newDroppeds,
        nonDroppedItems: newNonDroppedItems,
      };
    });
  };

  const swapDroppeds = (sourceContainerId: ContainersKey, targetContainerId: ContainersKey) => {
    setState((prev) => {
      const prevCopy = { ...prev.droppeds };
      const sourceValue = prevCopy[sourceContainerId];
      const targetValue = prevCopy[targetContainerId];

      prevCopy[sourceContainerId] = targetValue;
      prevCopy[targetContainerId] = sourceValue;

      return {
        ...prev,
        droppeds: prevCopy,
      };
    });
  };

  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) return;
    const newFields = containers.map(initialMapper);
    replace(newFields);
    initialRender.current = false;
  }, [replace, containers, initialMapper]);

  return {
    data: {
      nonDroppedItems: state.nonDroppedItems,
      options,
    },
    get: {
      findOption,
    },
    actions: {
      replace,
      swapDroppeds,
      addItem,
      moveSessionBetweenCycleDays,
      removeDroppedCycleDay,
    },
  };
}
