import type { AtomicElement } from '@/presentation/globals/types';
import {
  cardClassesConfig,
  type CardVariantProps,
} from '../card.config';
import { twMerge } from 'tailwind-merge';
import { CardHighlightBorder } from './decoration/CardHighlightBorder';
import { useId } from 'react';

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
  border,
}: Props) {
  const id = useId();

  const cardVariant = cardClassesConfig({
    color,
    type,
    width,
    border,
  });
  const classNames = twMerge(cardVariant, className);
  return (
    <Tag id={id} className={classNames}>
      {children}
      {border === 'highlighted' && <CardHighlightBorder />}
    </Tag>
  );
}
