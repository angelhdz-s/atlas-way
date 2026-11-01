import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function TooltipBackdrop({ className }: Props) {
  return <div className={twMerge('fixed inset-0 z-9 bg-black/50', className)}></div>;
}
