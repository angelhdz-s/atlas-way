import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function CardFooter({ children, className }: Props) {
  return (
    <footer className={twMerge('flex items-center gap-2 text-sm', className)}>{children}</footer>
  );
}
