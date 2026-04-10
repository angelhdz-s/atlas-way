import type { AtomicElement } from '@/presentation/globals/presentation.types';
import { cardVariant, type CardVariantProps } from '../card.config';
import { twMerge } from 'tailwind-merge';
import { CardHighlightBorder } from './decoration/CardHighlightBorder';
import { useId } from 'react';

interface Props extends CardVariantProps {
  className?: string;
  Tag?: AtomicElement;
  children: React.ReactNode;
}

export function Card({ children, Tag = 'div', className, color, type, width, border }: Props) {
  const id = useId();

  const variantClassNames = cardVariant({
    color,
    type,
    width,
    border,
  });
  return (
    <Tag id={id} className={twMerge(variantClassNames, className)}>
      {children}
      {border === 'highlighted' && (
        <>
          <CardHighlightBorder />
          <CardHighlightBorder className="opacity-20 blur-xs" />
        </>
      )}
    </Tag>
  );
}
