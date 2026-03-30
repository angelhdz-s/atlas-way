import { twMerge } from 'tailwind-merge';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: Props) {
  return <header className={twMerge('flex flex-col', className)}>{children}</header>;
}
