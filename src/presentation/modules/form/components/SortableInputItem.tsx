import { useSortable } from '@dnd-kit/react/sortable';
import { Button } from '@/presentation/modules/button/components/Button';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { Icon } from '@/presentation/modules/icon/components/Icon';

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
          className="cursor-grab"
          ref={handleRef}
          variant={{ type: 'icon', color: 'simple' }}
          aria-label="Drag item"
        >
          <Icon icon="grip-vertical" variant={{ size: 'md', weight: 'moderate' }} />
        </Button>
        <span className="px-2 text-sm">{index + 1}</span>
        <div>{item.label}</div>
      </div>
      <Button
        variant={{ type: 'icon', color: 'simple' }}
        onClick={handleRemoveOption}
        aria-label="Remove item"
      >
        <Icon icon="trash" variant={{ size: 'md', weight: 'moderate' }} />
      </Button>
    </div>
  );
}
