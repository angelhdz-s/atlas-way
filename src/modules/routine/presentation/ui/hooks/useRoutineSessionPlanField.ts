import { removeObjectKey } from '@/presentation/globals/lib/utils';
import type { SelectOption } from '@/presentation/modules/form/types';
import { useState } from 'react';

type Props = {
  options: SelectOption[];
  containers: SelectOption[];
};

type ContainersKey = Props['containers'][number]['value'];

type DroppedItem = {
  [K in ContainersKey]?: SelectOption;
};

type State<T extends SelectOption> = {
  droppeds: T['value'];
  nonDroppedItems: T[];
};

interface Action {
  type: 'addDroppedItem' | 'moveDroppedItems';
}

type _ReduceController<T extends SelectOption> = {
  [key in Action['type']]: (state: State<T>, action: Action) => State<T>;
};

export function useRoutineSessionPlanField({ options, containers }: Props) {
  const [items, _setItems] = useState<SelectOption[]>(options);
  const [state, setState] = useState<{
    droppeds: DroppedItem;
    nonDroppedItems: SelectOption[];
  }>({
    droppeds: {},
    nonDroppedItems: items,
  });

  const findOption = (key: ContainersKey): SelectOption | undefined => {
    return state.droppeds[key];
  };

  const droppedValues = Object.values(state.droppeds);
  const droppedKeys = Object.keys(state.droppeds);
  const droppedOptionValues = droppedValues
    .map((item) => item?.value)
    .filter((item) => item !== undefined);
  const droppedPossibleKeys = containers.map((day) => day.value);
  const droppedPossibleOptionValues = items.map((item) => item.value);

  const isDroppedKey = (key: string) => {
    return droppedKeys.includes(key);
  };

  const isDroppedValue = (valueId: string) => {
    return droppedOptionValues.includes(valueId);
  };

  const isPossibleDroppedKey = (key: string) => {
    return droppedPossibleKeys.includes(key);
  };

  const isPossibleDroppedValue = (valueId: string) => {
    return droppedPossibleOptionValues.includes(valueId);
  };

  const addDroppedSession = (itemId: string, containerId: ContainersKey) => {
    if (!isPossibleDroppedKey(containerId)) return;
    const item = items.find((item) => item.value === itemId);
    if (!item) return;
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
  };

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

  const getSessionByCycleDay = (containerId: ContainersKey) => {
    return state.droppeds[containerId]?.value;
  };

  const getCycleDayBySession = (itemId: string): ContainersKey | undefined => {
    for (const key in state.droppeds) {
      if (state.droppeds[key]?.value === itemId) return key;
    }
  };

  const removeDroppedSession = (itemId: string) => {
    setState((prev) => {
      for (const key in prev.droppeds) {
        if (prev.droppeds[key]?.value !== itemId) continue;

        const item = prev.droppeds[key];
        if (!item) return prev;

        const newNonDroppedItems = [...prev.nonDroppedItems, item];
        const newDroppeds = removeObjectKey(prev.droppeds, key);
        return {
          droppeds: newDroppeds,
          nonDroppedItems: newNonDroppedItems,
        };
      }
      return prev;
    });
  };

  return {
    data: {
      droppeds: state.droppeds,
      nonDroppedItems: state.nonDroppedItems,
      items,
    },
    get: {
      findOption,
      isDroppedKey,
      isDroppedValue,
      isPossibleDroppedKey,
      getCycleDayBySession,
      getSessionByCycleDay,
      isPossibleDroppedValue,
    },
    actions: {
      swapDroppeds,
      addDroppedSession,
      moveSessionBetweenCycleDays,
      removeDroppedSession,
      removeDroppedCycleDay,
    },
  };
}
