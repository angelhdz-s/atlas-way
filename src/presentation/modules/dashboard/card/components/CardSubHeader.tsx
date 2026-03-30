import { twMerge } from 'tailwind-merge';

type Props = {
  description: string;
  className?: string;
};

export function CardSubHeader({ description, className }: Props) {
  return (
    <div className={twMerge('flex flex-col gap-1 text-lg font-light', className)}>
      <p className="line-clamp-1">{description}</p>
    </div>
  );
}
