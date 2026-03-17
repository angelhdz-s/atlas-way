import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function CardMain({ children, className }: Props) {
  return <main className={twMerge('flex flex-1 flex-col gap-4', className)}>{children}</main>;
}
