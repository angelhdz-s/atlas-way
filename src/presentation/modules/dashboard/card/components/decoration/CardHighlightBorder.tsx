import { twMerge } from 'tailwind-merge';

export function CardHighlightBorder({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'absolute -inset-px -z-2 overflow-hidden rounded-[17px] opacity-100 duration-1000 group-hover:opacity-0',
        //
        'before:absolute before:inset-0 before:top-[50%] before:left-[50%] before:block before:h-[500%] before:w-full before:translate-[-50%]',
        //
        'before:bg-conic before:from-transparent before:from-40% before:to-transparent before:to-60% before:transition-opacity',
        //
        'light:before:via-black before:via-accent before:animate-duration-5000 before:animate-spin',
        className
      )}
    ></div>
  );
}
