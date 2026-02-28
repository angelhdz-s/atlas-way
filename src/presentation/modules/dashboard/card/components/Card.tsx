import type { AtomicElement } from '@/presentation/globals/types';
import type { CardVariantProps } from '../config';
import { cardVariantHelper } from '../helpers/card-variant.helper';

interface Props extends CardVariantProps {
  className?: string;
  Tag?: AtomicElement;
  children: React.ReactNode;
}

export function Card({
  children,
  Tag = 'div',
  className,
  color,
  type,
  width,
}: Props) {
  return (
    <Tag
      className={cardVariantHelper(
        { color, type, width },
        className
      )}
    >
      {children}
    </Tag>
  );
}
