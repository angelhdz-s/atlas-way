import { twMerge } from 'tailwind-merge';

export function CardHighlightBorder({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'before:animate-duration-5000 light:before:via-black before:via-accent absolute -inset-px -z-2 overflow-hidden rounded-[17px] opacity-100 duration-1000 group-hover:opacity-0 before:absolute before:inset-0 before:top-[50%] before:left-[50%] before:size-[200%] before:translate-[-50%] before:animate-spin before:bg-conic before:from-transparent before:from-35% before:to-transparent before:to-65% before:transition-opacity',
        className
      )}
    ></div>
  );
}
