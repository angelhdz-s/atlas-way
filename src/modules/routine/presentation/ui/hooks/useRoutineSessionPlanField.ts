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

    setDroppeds((prev) => {
      const newSession = {
        [containerData.key]: item,
      };

      return {
        ...prev,
        ...newSession,
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

    setDroppeds((prev) => {
      const newDropped = {
        [target.containerKey]: item,
      };
      const removeKeyDroppreds = removeObjectKey({ ...prev }, source.containerKey);
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

    setDroppeds((prev) => {
      const item = prev[containerData.id];
      if (!item) return prev;
      const newDroppeds = removeObjectKey({ ...prev }, containerData.id);
      return {
        ...newDroppeds,
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

    setDroppeds((prev) => {
      const droppedsCopy = { ...prev };
      const sourceValue = droppedsCopy[source.containerKey];
      const targetValue = droppedsCopy[target.containerKey];

      droppedsCopy[source.containerKey] = targetValue;
      droppedsCopy[target.containerKey] = sourceValue;

      return {
        ...droppedsCopy,
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
      replace,
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
