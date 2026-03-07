import { IconGripVertical, IconTrash } from '@/presentation/globals/components/Icons';
import { useSortable } from '@dnd-kit/react/sortable';

type Props = {
  field: { id: string; label: string; fieldId: string };
  index: number;
  onRemoveOption: (id: string, index: number) => void;
  register: object;
};
export function SortableInputItem({ field, index, onRemoveOption, register }: Props) {
  const handleRemoveOption = () => {
    onRemoveOption(field.id, index);
  };

  const { ref, handleRef } = useSortable({
    id: field.id,
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
        <div>{field.label}</div>
      </div>
      <button
        type="button"
        onClick={handleRemoveOption}
        className="flex aspect-square size-8 cursor-pointer items-center justify-center hover:text-current/50"
      >
        <IconTrash className="size-5" />
      </button>
      <input type="hidden" {...register} />
    </div>
  );
}
