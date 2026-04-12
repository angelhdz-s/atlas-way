import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function CardTagsWrapperFade({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'no-scrollbar flex items-center gap-1 overflow-x-scroll pr-20',
        'mask-r-from-50% mask-r-to-100%',
        className
      )}
    >
      {children}
    </div>
  );
}
