type Props = {
  className?: string;
  children: React.ReactNode;
};

export function BentoCard({ className, children }: Props) {
  return (
    <article
      className={`bg-fill-base light:shadow-[inset_0px_1px_1px_0px_white,5px_5px_20px_gray]/50 border-subtle/20 rounded-lg border shadow-[inset_0px_0.5px_0px_0px_var(--color-subtle),0px_5px_20px_black]/50 md:min-h-32 ${className}`}
    >
      {children}
    </article>
  );
}
