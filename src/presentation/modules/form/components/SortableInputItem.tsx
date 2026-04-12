import { useSortable } from '@dnd-kit/react/sortable';
import { IconGripVertical } from '@/presentation/globals/components/icons/outline/IconGripVertical';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import type { SelectOption } from '@/presentation/modules/form/form.types';

type Props = {
  item: SelectOption;
  index: number;
  onRemoveOption: (id: string, index: number) => void;
};
export function SortableInputItem({ item, index, onRemoveOption }: Props) {
  const handleRemoveOption = () => {
    onRemoveOption(item.value, index);
  };

  const { ref, handleRef } = useSortable({
    id: item.value,
    index,
  });

  return (
    <div
      className="bg-middle flex min-h-10 w-full items-center gap-2 rounded-lg py-1 pr-3 pl-1"
      ref={ref}
    >
      <div className="flex w-full items-center">
        <button
          type="button"
          className="flex aspect-square w-8 cursor-pointer items-center justify-center"
          ref={handleRef}
        >
          <IconGripVertical className="size-5" />
        </button>
        <span className="px-2 text-sm">{index + 1}</span>
        <div>{item.label}</div>
      </div>
      <button
        type="button"
        onClick={handleRemoveOption}
        className="flex aspect-square size-8 cursor-pointer items-center justify-center hover:text-current/50"
      >
        <IconTrash className="size-5" />
      </button>
    </div>
  );
}
