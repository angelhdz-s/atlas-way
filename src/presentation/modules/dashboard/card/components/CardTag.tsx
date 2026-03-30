import { twMerge } from 'tailwind-merge';

type CardTagValueType = string | React.ReactNode;

type CardTagType = {
  selected: boolean;
  value: CardTagValueType;
};

type Props = {
  tag: CardTagType;
  className?: string;
};

export function CardTag({ tag, className }: Props) {
  const { value, selected } = tag;
  const selectedClassName = selected
    ? 'bg-accent fg-strong-light light:fg-strong-dark'
    : 'bg-front fg-strong';
  return (
    <div
      className={twMerge(
        'rounded-full px-3 py-1 text-sm font-light whitespace-nowrap',
        selectedClassName,
        className
      )}
    >
      {value}
    </div>
  );
}
