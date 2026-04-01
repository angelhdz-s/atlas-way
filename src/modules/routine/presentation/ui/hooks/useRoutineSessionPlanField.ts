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

  // Typed fields variable
  const typedFields: TField<TForm, TName>[] = fields;

  const findOption = (key: ContainersKey): SelectOption | undefined => {
    return state.droppeds[key];
  };

  const addItem = ({
    itemData,
    containerData,
  }: {
    itemData: {
      id: string;
    };
    containerData: {
      key: ContainersKey;
      index: number;
    };
  }) => {
    const item = options.find((option) => option.value === itemData.id);
    if (!item) return;
    const targetField = typedFields[containerData.index];
    if (!targetField) return;

    setState((prev) => {
      const newSession = {
        [containerData.key]: item,
      };
      const newNonDroppedItems = [
        ...prev.nonDroppedItems.filter((item) => item.value !== itemData.id),
      ];
      const newDroppeds = {
        ...prev.droppeds,
        ...newSession,
      };

      return {
        droppeds: newDroppeds,
        nonDroppedItems: newNonDroppedItems,
      };
    });
    if (!fieldMappers?.add) return;

    const newField = fieldMappers.add(targetField, item);
    update(containerData.index, newField);
  };

  const moveSessionBetweenCycleDays = ({
    source,
    target,
  }: {
    source: {
      id: string;
      containerKey: ContainersKey;
      containerIndex: number;
    };
    target: {
      containerKey: ContainersKey;
      containerIndex: number;
    };
  }) => {
    const sourceField = typedFields[source.containerIndex];
    const targetField = typedFields[target.containerIndex];

    if (!sourceField && !targetField) return;

    const item = options.find((option) => option.value === source.id);
    if (!item) return;

    setState((prev) => {
      const newDropped = {
        [target.containerKey]: item,
      };
      const removeKeyDroppreds = removeObjectKey({ ...prev.droppeds }, source.containerKey);
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

    if (!fieldMappers?.swap) return;

    const [newSourceField, newTargetField] = fieldMappers.swap(sourceField, targetField);

    // remove old source
    update(source.containerIndex, newSourceField);
    // add new target
    update(target.containerIndex, newTargetField);
  };

  const removeDroppedCycleDay = ({
    containerData,
    itemData,
  }: {
    containerData: {
      id: ContainersKey;
      index: number;
    };
    itemData: {
      id: string;
    };
  }) => {
    const item = options.find((option) => option.value === itemData.id);
    if (!item) return;

    const field = typedFields[containerData.index];
    if (!field) return;

    setState((prev) => {
      const item = prev.droppeds[containerData.id];
      if (!item) return prev;
      const newDroppeds = removeObjectKey({ ...prev.droppeds }, containerData.id);
      const newNonDroppedItems = [...prev.nonDroppedItems, item];
      return {
        droppeds: newDroppeds,
        nonDroppedItems: newNonDroppedItems,
      };
    });

    if (!fieldMappers.remove) return;

    const newField = fieldMappers.remove(field);
    update(containerData.index, newField);
  };

  const swapDroppeds = ({
    source,
    target,
  }: {
    source: {
      containerKey: ContainersKey;
      containerIndex: number;
    };
    target: {
      containerKey: ContainersKey;
      containerIndex: number;
    };
  }) => {
    const sourceField = typedFields[source.containerIndex];
    const targetField = typedFields[target.containerIndex];

    if (!sourceField || !targetField) return;

    setState((prev) => {
      const prevCopy = { ...prev.droppeds };
      const sourceValue = prevCopy[source.containerKey];
      const targetValue = prevCopy[target.containerKey];

      prevCopy[source.containerKey] = targetValue;
      prevCopy[target.containerKey] = sourceValue;

      return {
        ...prev,
        droppeds: prevCopy,
      };
    });

    if (!fieldMappers.swap) return;

    const [newSourceField, newTargetField] = fieldMappers.swap(sourceField, targetField);

    update(source.containerIndex, newSourceField);
    update(target.containerIndex, newTargetField);
  };

  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) return;
    if (!data || data.length < 1) {
      const newFields = containers.map(fieldMappers.initialMapper);
      replace(newFields);
    } else {
      replace(data as any);
      setState((prev) => {
        const { droppeds } = { ...prev };

        const droppedOptions: string[] = [];
        for (let i = 0; i < data.length; i++) {
          const routineDay = data[i];
          if (routineDay.sessionId !== null) {
            const option = options.find((o) => o.value === routineDay.sessionId);
            if (!option) continue;
            const dayKey = containers[i].value;
            droppeds[dayKey] = option;
            droppedOptions.push(option.value);
          }
        }

        const nonDroppedItems = options.filter((o) => !droppedOptions.includes(o.value));

        return {
          droppeds,
          nonDroppedItems,
        };
      });
    }

    initialRender.current = false;
  }, [replace, containers, fieldMappers, data, options]);

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
