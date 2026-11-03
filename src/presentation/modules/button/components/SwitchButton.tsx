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
        'relative h-8 w-12 cursor-pointer rounded-full border transition-all',
        'before:bg-sf-base-inverse before:absolute before:inset-0 before:top-1.25 before:bottom-1.25 before:aspect-square before:h-5 before:rounded-full before:transition-[left]',
        active
          ? 'bg-sf-action-default border-bd-action-default'
          : 'bg-sf-base-page border-bd-base-default',
        active ? 'before:right-0 before:left-5.25' : 'before:right-0 before:left-1.25',
        className
      )}
      aria-label={active ? activeLabel : inactiveLabel}
    />
  );
}
