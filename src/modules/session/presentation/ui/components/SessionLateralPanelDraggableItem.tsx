import type { DropdownMenuItem } from '@/presentation/globals/components/DropdownMenu';
import { ActionsButton } from '@/presentation/modules/button/components/ActionsButton';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type ExerciseProps = {
  name: string;
  sets: number;
  reps: number;
};

type SessionProps = {
  name: string;
  exericises: ExerciseProps[];
};

export type SessionLateralPanelDraggableItemProps = {
  className?: string;
  session: SessionProps;
  actions: DropdownMenuItem[];
};

export function SessionLateralPanelDraggableItem({
  className,
  session,
  actions,
}: SessionLateralPanelDraggableItemProps) {
  return (
    <article
      className={twMerge(
        'bg-sf-base-default border-bd-base-default cursor-grab space-y-2 rounded-sm border p-2',
        className
      )}
    >
      <header className="flex items-center gap-1">
        <Icon
          icon="grip-vertical"
          variant={{ size: 'sm', weight: 'thin' }}
          className="text-ic-base-top"
        />
        <span className="body-medium text-txt-base-heading flex-1">{session.name}</span>
        <ActionsButton menuSide="left" actions={actions} />
      </header>
      <ul className="caption text-txt-base-body space-y-0.5">
        {session.exericises.map((e) => (
          <li key={e.name} className="flex items-center gap-2">
            <span className="flex-1">{e.name}</span>
            <span>
              {e.sets} x {e.reps}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
