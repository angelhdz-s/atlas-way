import { useSortable } from '@dnd-kit/react/sortable';
import { IconGripVertical } from '@/presentation/globals/components/icons/outline/IconGripVertical';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import { Button } from '@/presentation/modules/button/components/Button';
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
      className="bg-fill-base flex min-h-10 w-full items-center gap-2 rounded-lg py-1 pr-3 pl-1"
      ref={ref}
      data-testid="sortable-item"
    >
      <div className="flex w-full items-center">
        <Button
          variantConfig={{ type: 'square', color: 'simple' }}
          className="cursor-grab"
          ref={handleRef}
          aria-label="Drag item"
        >
          <IconGripVertical className="size-5" />
        </Button>
        <span className="px-2 text-sm">{index + 1}</span>
        <div>{item.label}</div>
      </div>
      <Button
        variantConfig={{ type: 'square', color: 'simple' }}
        onClick={handleRemoveOption}
        aria-label="Remove item"
      >
        <IconTrash className="size-5" />
      </Button>
    </div>
  );
}
