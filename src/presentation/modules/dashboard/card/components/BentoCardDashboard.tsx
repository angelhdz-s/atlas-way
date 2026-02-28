type Props = {
  children: React.ReactNode;
  Tag?: 'article' | 'section' | 'li' | 'div';
  className?: string;
};

export function BentoCardDashboard({
  Tag = 'article',
  children,
  className,
}: Props) {
  return (
    <Tag
      className={`bg-middle border-bd-muted rounded-xl border p-4 ${className}`}
    >
      {children}
    </Tag>
  );
}
