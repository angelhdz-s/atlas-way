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
    ? 'bg-accent text-fg-strong-light light:text-fg-strong-dark'
    : 'bg-fill-middle text-fg-strong';
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
