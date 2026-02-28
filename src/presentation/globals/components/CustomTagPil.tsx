import type { AtomicElement } from '../types';

interface Props {
  className?: string;
  Tag: AtomicElement;
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export function CustomTagPil({
  Tag,
  className,
  children,
  href,
  target,
}: Props) {
  return (
    <Tag
      className={`bg-subtle/10 border-subtle/20 hover:bg-primary flex items-center gap-2 rounded-full border px-4 py-2 transition-colors ${className}`}
      href={href}
      target={target}
    >
      {children}
    </Tag>
  );
}
