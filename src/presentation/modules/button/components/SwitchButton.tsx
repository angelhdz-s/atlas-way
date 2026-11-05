import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  active?: boolean;
  activeLabel: string;
  inactiveLabel: string;
  onClick?: () => void;
};

export function SwitchButton({
  className,
  active = false,
  activeLabel,
  inactiveLabel,
  onClick,
}: Props) {
  const toggleActiveState = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={toggleActiveState}
      role="switch"
      aria-checked={active}
      className={twMerge(
        'relative h-6 w-10 cursor-pointer rounded-full border transition-all',
        'before:bg-sf-base-inverse before:absolute before:inset-0 before:top-0.75 before:rounded-full before:transition-[left]',
        'before:bottom-1 before:aspect-square before:h-4',
        active
          ? 'bg-sf-action-default border-bd-action-default'
          : 'bg-sf-base-page border-bd-base-default',
        active ? 'before:left-4.75' : 'before:left-0.75',
        className
      )}
      aria-label={active ? activeLabel : inactiveLabel}
    />
  );
}
