import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function DevFormGroup({ children, className }: Props) {
  return <div className={twMerge('rounded-xl p-4 outline', className)}>{children}</div>;
}
