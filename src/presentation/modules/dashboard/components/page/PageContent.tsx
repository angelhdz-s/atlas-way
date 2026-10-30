import { twMerge } from 'tailwind-merge';

export function PageContent({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <main className={twMerge('flex-1', className)}>{children}</main>;
}
